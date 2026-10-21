import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { env } from './env.mjs';

// Genera un HTML estático por ruta para que buscadores y redes sociales vean
// el contenido y los metadatos correctos sin ejecutar JavaScript.
process.env.NODE_ENV = 'production';
const dist = new URL('../dist/', import.meta.url);
const ssrDir = new URL('../dist-ssr/', import.meta.url);
const { render, routeSeo, getSeo, routeHeadTags, canonicalUrl, DEFAULT_IMAGE, SITE_URL } =
  await import(new URL('entry-server.js', ssrDir));

const template = await readFile(new URL('index.html', dist), 'utf8');

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Se reemplaza con una función para que «$&» o «$'» en el contenido no se
// interpreten como patrones de sustitución.
function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Etiqueta no encontrada en index.html: ${pattern}`);
  return html.replace(pattern, () => replacement);
}

// Tolera saltos de línea y espacios entre atributos, como los que deja un formateador.
const metaTag = (attr, name) => new RegExp(`<meta\\s+${attr}="${name}"\\s+content="[^"]*"\\s*/>`);
const linkTag = (rel) => new RegExp(`\\s*<link\\s+rel="${rel}"\\s+href="[^"]*"\\s*/>`);

function setMeta(html, attr, name, value) {
  return setTag(html, metaTag(attr, name), `<meta ${attr}="${name}" content="${escapeHtml(value)}" />`);
}

function renderHeadTag({ tag, attrs, text }) {
  const attributes = Object.entries({ ...attrs, 'data-seo': 'route' })
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`).join(' ');
  return tag === 'script' ? `<script ${attributes}>${text}</script>` : `<${tag} ${attributes} />`;
}

function verificationTags() {
  const tags = [];
  const google = env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = env.BING_SITE_VERIFICATION?.trim();
  if (google) tags.push(`<meta name="google-site-verification" content="${escapeHtml(google)}" />`);
  if (bing) tags.push(`<meta name="msvalidate.01" content="${escapeHtml(bing)}" />`);
  return tags;
}

function buildPage(path, seo, body) {
  const url = canonicalUrl(path);
  const lang = seo.lang ?? 'es';
  let html = template;

  html = setTag(html, /<html\s+lang="[^"]*">/, `<html lang="${lang}">`);
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);
  html = setMeta(html, 'name', 'description', seo.description);
  html = setMeta(html, 'name', 'keywords', seo.keywords);
  html = setMeta(html, 'name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
  html = setMeta(html, 'property', 'og:locale', lang === 'en' ? 'en_US' : 'es_PA');
  html = setMeta(html, 'property', 'og:title', seo.title);
  html = setMeta(html, 'property', 'og:description', seo.description);
  html = setMeta(html, 'property', 'og:type', seo.article ? 'article' : 'website');
  html = setMeta(html, 'property', 'og:image', DEFAULT_IMAGE);
  html = setMeta(html, 'name', 'twitter:title', seo.title);
  html = setMeta(html, 'name', 'twitter:description', seo.description);
  html = setMeta(html, 'name', 'twitter:image', DEFAULT_IMAGE);

  // La página 404 no tiene URL canónica propia.
  if (seo.noindex) {
    html = setTag(html, linkTag('canonical'), '');
    html = setTag(html, new RegExp(`\\s*${metaTag('property', 'og:url').source}`), '');
  } else {
    html = setTag(html, linkTag('canonical'), `\n  <link rel="canonical" href="${url}" />`);
    html = setMeta(html, 'property', 'og:url', url);
  }

  const extraHead = [...verificationTags(), ...routeHeadTags(path).map(renderHeadTag)];
  if (extraHead.length) html = setTag(html, /<\/head>/, `  ${extraHead.join('\n  ')}\n</head>`);

  return setTag(html, /<div id="root"><\/div>/, `<div id="root">${body}</div>`);
}

// Archivos planos (/blog -> blog.html) para no depender de las barras finales.
const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`);
const rewrites = [];

for (const [path, seo] of Object.entries(routeSeo)) {
  const file = new URL(fileFor(path), dist);
  await mkdir(dirname(fileURLToPath(file)), { recursive: true });
  await writeFile(file, buildPage(path, seo, render(path)));
  if (path !== '/') rewrites.push(`${path}  /${fileFor(path)}  200`);
}

// Netlify sirve 404.html con estado 404 para cualquier ruta que no exista.
await writeFile(new URL('404.html', dist), buildPage('/404', getSeo('/404'), render('/404')));

// Netlify aplica _redirects antes que las reglas de netlify.toml.
await writeFile(new URL('_redirects', dist), `${rewrites.join('\n')}\n`);

const urls = Object.entries(routeSeo)
  .filter(([, seo]) => !seo.noindex)
  .map(([path, seo]) => {
    const lastmod = seo.article ? `\n    <lastmod>${seo.article.dateModified}</lastmod>` : '';
    const alternates = seo.alternate
      ? [[seo.lang ?? 'es', path], [seo.alternate.lang, seo.alternate.path]]
          .map(([hreflang, href]) => `\n    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${canonicalUrl(href)}" />`)
          .join('')
      : '';
    return `  <url>\n    <loc>${canonicalUrl(path)}</loc>${lastmod}${alternates}\n  </url>`;
  });

await writeFile(new URL('sitemap.xml', dist),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerender listo: ${Object.keys(routeSeo).length} rutas + 404 en ${SITE_URL}.`);
