import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const pages = (await readdir(dist, { recursive: true }))
  .filter((file) => file.endsWith('.html') && file !== '404.html');
const read = (file) => readFile(new URL(file, dist), 'utf8');
const pick = (html, pattern) => html.match(pattern)?.[1];

test('every prerendered page has its own title, description, canonical and content', async () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const file of pages) {
    const html = await read(file);
    const title = pick(html, /<title>([^<]+)<\/title>/);
    const description = pick(html, /<meta name="description" content="([^"]+)"/);
    const canonical = pick(html, /<link rel="canonical" href="([^"]+)"/);
    const route = file === 'index.html' ? '/' : `/${file.replace(/\.html$/, '')}`;
    assert.ok(title && !titles.has(title), `duplicate or missing title in ${file}`);
    assert.ok(description && !descriptions.has(description), `duplicate or missing description in ${file}`);
    assert.equal(canonical, `https://pythonpanama.org${route}`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${file} must have exactly one h1`);
    assert.match(html, /<div id="root">.{200,}/s, `${file} must ship its content prerendered`);
    titles.add(title);
    descriptions.add(description);
  }
});

test('sitemap lists exactly the indexable pages', async () => {
  const sitemap = await read('sitemap.xml');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc).sort();
  const canonicals = await Promise.all(pages.map(async (file) => pick(await read(file), /<link rel="canonical" href="([^"]+)"/)));
  assert.deepEqual(locs, canonicals.sort());
  assert.match(await read('robots.txt'), /Sitemap: https:\/\/pythonpanama\.org\/sitemap\.xml/);
});

test('404 page is not indexable and has no canonical', async () => {
  const html = await read('404.html');
  assert.match(html, /<meta name="robots" content="noindex, follow" \/>/);
  assert.doesNotMatch(html, /rel="canonical"/);
});

test('every page route in App.tsx is prerendered, and redirects are real 301s', async () => {
  const app = await readFile(new URL('../src/pages/App.tsx', import.meta.url), 'utf8');
  const netlify = await readFile(new URL('../netlify.toml', import.meta.url), 'utf8');
  const routes = [...app.matchAll(/path="([^"*]+)"\s+element=\{<(\w+)/g)];
  for (const [, path, component] of routes) {
    if (component === 'Navigate') {
      assert.match(netlify, new RegExp(`from = "${path}"[\\s\\S]*?status = 301`), `${path} needs a 301 in netlify.toml`);
    } else {
      const file = path === '/' ? 'index.html' : `${path.slice(1).toLowerCase()}.html`;
      assert.ok(pages.includes(file), `${path} has no entry in src/seo/siteSeo.ts, so it is not prerendered`);
    }
  }
  assert.equal(pages.length, routes.filter(([, , component]) => component !== 'Navigate').length);
});
