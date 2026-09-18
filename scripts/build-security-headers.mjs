import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const hashes = [];
for (const [, attributes, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
  if (/\bsrc\s*=/.test(attributes)) continue;
  // Only the site's structured data may be inline. Fail closed for new executable scripts.
  if (!/\btype=["']application\/ld\+json["']/.test(attributes)) {
    throw new Error('Unexpected inline script: use an external module instead.');
  }
  JSON.parse(body);
  hashes.push(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
}
const policy = [
  "default-src 'self'",
  `script-src 'self' ${hashes.join(' ')}`,
  "script-src-attr 'none'",
  // Existing React/Bootstrap styles require inline styles, not inline scripts.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data:",
  // Registration forms are disabled; no browser connection to the database is needed.
  "connect-src 'self'",
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
await writeFile(new URL('../dist/_headers', import.meta.url),
  '/*\n' + Object.entries(headers).map(([key, value]) => `  ${key}: ${value}\n`).join(''));
console.log('Security headers generated with hashes of the built JSON-LD.');
