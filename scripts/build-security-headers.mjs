import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { gaMeasurementId } from './env.mjs';

const dist = new URL('../dist/', import.meta.url);
const htmlFiles = (await readdir(dist, { recursive: true })).filter((file) => file.endsWith('.html'));
const hashes = new Set();
for (const file of htmlFiles) {
  const html = await readFile(new URL(file, dist), 'utf8');
  for (const [, attributes, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/.test(attributes)) continue;
    // Only the site's structured data may be inline. Fail closed for new executable scripts.
    if (!/\btype=["']application\/ld\+json["']/.test(attributes)) {
      throw new Error(`Unexpected inline script in ${file}: use an external module instead.`);
    }
    JSON.parse(body);
    hashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
  }
}
// Google Analytics 4 is opt-in: its origins are allowed only when the build enables it.
const analytics = Boolean(gaMeasurementId);
const gaScript = analytics ? ' https://www.googletagmanager.com' : '';
const gaConnect = analytics ? ' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com' : '';
const gaImg = analytics ? ' https://*.google-analytics.com https://www.googletagmanager.com' : '';
const policy = [
  "default-src 'self'",
  `script-src 'self'${gaScript} ${[...hashes].join(' ')}`,
  "script-src-attr 'none'",
  // Existing React/Bootstrap styles require inline styles, not inline scripts.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  `img-src 'self' data:${gaImg}`,
  // Registration forms are disabled; no browser connection to the database is needed.
  `connect-src 'self'${gaConnect}`,
  "object-src 'none'",
  "base-uri 'none'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  'upgrade-insecure-requests',
].join('; ');
const headers = {
  'Content-Security-Policy': policy,
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Strict-Transport-Security': 'max-age=31536000',
};
await writeFile(new URL('_headers', dist),
  '/*\n' + Object.entries(headers).map(([key, value]) => `  ${key}: ${value}\n`).join(''));
console.log('Security headers generated with hashes of the built JSON-LD.');
