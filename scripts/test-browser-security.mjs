import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { chromium } from '@playwright/test';

const root = resolve('dist');
const headersFile = await readFile(resolve(root, '_headers'), 'utf8');
const headers = Object.fromEntries(headersFile.split('\n').filter(line => line.startsWith('  ')).map(line => {
  const colon = line.indexOf(':');
  return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
}));
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.webmanifest': 'application/manifest+json' };
// Emulates Netlify: netlify.toml redirects, prerendered <route>.html files and 404.html.
const netlifyToml = await readFile('netlify.toml', 'utf8');
const redirects = new Map([...netlifyToml.matchAll(/from = "([^"]+)"\s+to = "([^"]+)"\s+status = 301/g)].map(([, from, to]) => [from, to]));
const isFile = async (file) => { try { return (await stat(file)).isFile(); } catch { return false; } };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (redirects.has(pathname)) { response.writeHead(301, { Location: redirects.get(pathname) }).end(); return; }
    let file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    let status = 200;
    if (!(await isFile(file))) file = file + '.html';
    if (!(await isFile(file))) { file = resolve(root, '404.html'); status = 404; }
    response.writeHead(status, { ...headers, 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
    response.end(await readFile(file));
  } catch { response.writeHead(500).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || undefined });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(`${page.url()}: ${error.message}`));
  // Hydration mismatches between the prerendered HTML and the client are logged as console errors.
  page.on('console', message => {
    // Only the document request of the deliberate 404 check may fail; a missing asset must not.
    const expected404 = message.location().url.endsWith('/unknown-route') && message.text().includes('status of 404');
    if (message.type() === 'error' && !expected404) errors.push(`${page.url()}: ${message.text()}`);
  });
  await page.addInitScript(() => {
    window.__cspViolations = [];
    document.addEventListener('securitypolicyviolation', event => window.__cspViolations.push(event.effectiveDirective));
  });
  const app = await readFile('src/pages/App.tsx', 'utf8');
  const routes = [...app.matchAll(/path="([^"]+)"/g)].map(match => match[1]).filter(route => !route.includes('*'));
  for (const route of routes) {
    const response = await page.goto(base + route);
    assert.equal(response.status(), 200);
    assert.equal(response.headers()['x-content-type-options'], 'nosniff');
    await page.waitForFunction(() => document.querySelector('#root')?.textContent.length > 100);
    await page.evaluate(() => document.fonts.ready);
    assert.deepEqual(await page.evaluate(() => window.__cspViolations), [], `CSP violation on ${route}`);
  }
  for (const [path, expected] of [
    ['/formulario-voluntario', '/quiero-ayudar'],
    ['/formulario-python-route', '/python-route'],
    ['/python-route#agenda', '/python-route/agenda'],
    ['/python-route#patrocinio', '/python-route/patrocinio'],
  ]) {
    await page.goto(base + path);
    await page.waitForURL(base + expected);
  }
  // The last hash redirect navigated inside the SPA: the head must describe the new route only.
  const head = await page.evaluate(() => ({
    title: document.title,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    ogUrl: document.querySelector('meta[property="og:url"]')?.content,
    jsonLd: [...document.querySelectorAll('script[data-seo="route"]')].map(script => JSON.parse(script.textContent)),
  }));
  assert.match(head.title, /^Patrocinio de Python Route/);
  assert.equal(head.canonical, 'https://pythonpanama.org/python-route/patrocinio');
  assert.equal(head.ogUrl, head.canonical);
  assert.deepEqual(head.jsonLd.map(data => data['@type']), ['BreadcrumbList']);
  assert.deepEqual(head.jsonLd[0].itemListElement.map(item => item.name), ['Inicio', 'Python Route', 'Patrocinio']);
  const missing = await page.goto(base + '/unknown-route');
  assert.equal(missing.status(), 404);
  await page.getByRole('heading', { name: 'Página no encontrada' }).waitFor();
  await page.goto(base + '/');
  await page.getByRole('link', { name: 'Aprender', exact: true }).click();
  await page.locator('a[href="/python-route"]').first().click();
  await page.waitForURL(base + '/python-route');
  const duringEventWeek = await browser.newPage();
  await duringEventWeek.clock.install({ time: new Date('2026-11-07T19:59:00Z') });
  await duringEventWeek.goto(base + '/');
  await duringEventWeek.locator('.home-event-feature').waitFor({ state: 'visible' });
  await duringEventWeek.clock.runFor(60000);
  await duringEventWeek.locator('.home-event-feature').waitFor({ state: 'hidden' });
  await duringEventWeek.close();
  const afterEvent = await browser.newPage();
  await afterEvent.clock.install({ time: new Date('2026-11-07T20:00:01Z') });
  await afterEvent.goto(base + '/');
  await afterEvent.locator('.home-event-feature').waitFor({ state: 'hidden' });
  await afterEvent.close();
  assert.deepEqual(errors, []);
  await page.evaluate(() => {
    const script = document.createElement('script');
    script.textContent = 'window.__injectedScriptRan = true';
    document.body.append(script);
  });
  assert.equal(await page.evaluate(() => window.__injectedScriptRan), undefined);
  await page.waitForFunction(() => window.__cspViolations.includes('script-src-elem'));
  assert.equal(await page.evaluate(async () => {
    try { await fetch('https://example.invalid/security-test'); return false; } catch { return true; }
  }), true);
  await page.waitForFunction(() => window.__cspViolations.includes('connect-src'));
  console.log(`${routes.length} routes, 4 redirects, real 404, hydration, client navigation, CSP inline-script and connection blocking: passed.`);
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
