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
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.webmanifest': 'application/manifest+json' };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = resolve(root, '.' + pathname);
    if (!file.startsWith(root + sep) && file !== root) { response.writeHead(403).end(); return; }
    try { if (!(await stat(file)).isFile()) file = resolve(root, 'index.html'); }
    catch { file = resolve(root, 'index.html'); }
    response.writeHead(200, { ...headers, 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
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
  page.on('pageerror', error => errors.push(error.message));
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
    ['/unknown-route', '/'],
  ]) {
    await page.goto(base + path);
    await page.waitForURL(base + expected);
  }
  await page.goto(base + '/');
  await page.getByRole('link', { name: 'Eventos', exact: true }).click();
  await page.locator('a[href="/python-route"]').first().click();
  await page.waitForURL(base + '/python-route');
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
  console.log(`${routes.length} routes, 5 redirects, client navigation, CSP inline-script and connection blocking: passed.`);
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
