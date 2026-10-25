import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';

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

test('Hacktoberfest page publishes the event details and official registration link', async () => {
  const page = await read('hacktoberfest.html');
  const home = await read('index.html');
  assert.match(page, /31 de octubre de 2026/);
  assert.match(page, /9:00 a\. m\. – 3:00 p\. m\./);
  assert.match(page, /Ciudad de las Artes · salón D-112/);
  assert.match(page, /Primeros Pasos/);
  assert.match(page, /IA de Código Abierto/);
  assert.match(page, /href="https:\/\/events\.mlh\.com\/events\/15044-hacktoberfest-hack-day-panama-city-x-python-panama"/);
  assert.match(page, /"@type":"Event"/);
  assert.match(page, /"startDate":"2026-10-31T09:00:00-05:00"/);
  assert.match(home, /class="home-event-feature"/);
});

test('community history has its own indexed page and menu entry', async () => {
  const page = await read('historia.html');
  const home = await read('index.html');
  assert.match(page, /<h1>Historia de Python Panamá<\/h1>/);
  assert.match(page, /Desde 2012/);
  assert.match(page, /1000\+/);
  assert.match(page, /400\+/);
  assert.match(page, /40\+/);
  assert.match(page, /Iniciativas que conectan a la comunidad/);
  assert.match(page, /Con apoyo y colaboración de/);
  assert.match(page, /Python Software Foundation/);
  assert.match(page, /href="\/blog\/python-panama-2024"/);
  assert.match(page, /href="\/historia"[^>]*>Historia<\/a>/);
  assert.doesNotMatch(page, /Así empezó este lenguaje/);
  assert.doesNotMatch(home, /Desde 2012 impulsamos el ecosistema Python en Panamá/);
  assert.doesNotMatch(home, /Iniciativas que conectan a la comunidad/);
});

test('community places and company collaborations have distinct, sourced pages', async () => {
  const history = await read('historia.html');
  const places = await read('lugares.html');
  const companies = await read('empresas-colaboradoras.html');
  assert.match(history, /href="\/lugares"/);
  assert.match(history, /href="\/empresas-colaboradoras"/);
  for (const name of ['ITSE', 'Universidad Tecnológica de Panamá', 'Universidad Interamericana de Panamá', 'Universidad de Panamá', 'Universidad del Istmo', 'Colegio La Salle Panamá', 'MyOffice', 'Rootstack']) {
    assert.match(places, new RegExp(name));
  }
  assert.match(places, /https:\/\/pycon\.pa\/2024\//);
  assert.match(places, /https:\/\/pycon\.pa\/2025\/agenda\.html/);
  assert.match(companies, /Rootstack/);
  assert.match(companies, /Arp IA/);
  assert.match(companies, /https:\/\/www\.arpia\.ai\/es/);
  assert.match(companies, /JetBrains/);
  assert.match(companies, /MyOffice/);
  assert.match(companies, /Patrocinador/);
  assert.match(places, /class="footprint-logo"/);
  assert.match(companies, /class="footprint-logo"/);
  for (const html of [places, companies]) {
    const logos = [...html.matchAll(/<img class="footprint-logo" src="(\/assets\/[^\"]+)"/g)].map(([, src]) => src);
    assert.ok(logos.length >= 4);
    await Promise.all(logos.map((src) => stat(new URL(`.${src}`, dist))));
  }
});

test('footer provides navigation and named social links', async () => {
  const page = await read('index.html');
  assert.match(page, /<footer class="site-footer">/);
  for (const route of ['/historia', '/python-route', '/blog', '/quiero-ayudar', '/patrocinadores', '/contacto']) {
    assert.match(page, new RegExp(`href="${route}"`));
  }
  for (const network of ['Facebook', 'Instagram', 'X', 'Meetup', 'GitHub']) {
    assert.match(page, new RegExp(`aria-label="${network}"`));
  }
  assert.match(page, /© 2012–2026 Python Panamá/);
  assert.match(page, /¡Que todo Panamá hable Python!/);
  assert.doesNotMatch(page, /Una comunidad abierta y respetuosa/);
});

test('home separates training from events', async () => {
  const home = await read('index.html');
  const training = await read('formacion.html');
  const eventsMenu = home.match(/>Eventos<\/a><ul class="dropdown-menu">([\s\S]*?)<\/ul>/)?.[1];
  const learningMenu = home.match(/>Aprender<\/a><ul class="dropdown-menu">([\s\S]*?)<\/ul>/)?.[1];
  assert.match(home, /<h3>Quiero aprender Python<\/h3>[\s\S]*?href="\/formacion"[^>]*>Ver cursos y talleres<\/a>/);
  assert.match(home, /<h3>Quiero asistir a eventos<\/h3>[\s\S]*?meetups, charlas y[\s\S]*?conferencias[\s\S]*?href="https:\/\/www\.meetup\.com\/es-ES\/Python-Panama\/"/);
  assert.match(training, /<h1>Cursos y talleres de Python<\/h1>/);
  assert.match(training, /<h3>Cursos<\/h3>/);
  assert.match(training, /<h3>Talleres<\/h3>/);
  assert.ok(eventsMenu && learningMenu);
  assert.doesNotMatch(eventsMenu, /python-route|formacion/);
  assert.match(learningMenu, /href="\/formacion"/);
  assert.match(learningMenu, /href="\/python-route"/);
});

test('sponsorship starts with three focused options and each has a detail page', async () => {
  const landing = await read('patrocinadores.html');
  assert.match(landing, /<h1>Elige cómo apoyar a Python Panamá<\/h1>/);
  assert.doesNotMatch(landing, /Paquetes pensados para objetivos distintos/);
  for (const category of ['comunidad', 'formacion', 'conferencia']) {
    assert.match(landing, new RegExp(`href="/patrocinadores/${category}"`));
    const detail = await read(`patrocinadores/${category}.html`);
    assert.match(detail, /Qué puede apoyar tu organización/);
    assert.match(detail, /Opciones de reconocimiento/);
    assert.match(detail, /href="mailto:pythonpanama4@gmail.com\?subject=/);
    assert.match(detail, /href="\/patrocinadores"/);
  }
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
