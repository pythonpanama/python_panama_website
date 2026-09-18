import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

test('built deployment protects scripts, framing and database connections', async () => {
  const headers = await readFile(new URL('../dist/_headers', import.meta.url), 'utf8');
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.ok(headers.startsWith('/*\n'));
  const csp = headers.match(/Content-Security-Policy: (.*)/)[1];
  const scripts = csp.match(/(?:^|; )script-src ([^;]+)/)[1];
  assert.ok(!scripts.includes('unsafe-inline') && !scripts.includes('unsafe-eval') && !scripts.includes('*'));
  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/.test(attrs)) continue;
    const hash = createHash('sha256').update(body).digest('base64');
    assert.ok(scripts.includes(`'sha256-${hash}'`));
  }
  for (const directive of ["frame-ancestors 'none'", "object-src 'none'", "base-uri 'none'", "connect-src 'self'", "form-action 'none'"]) {
    assert.ok(csp.includes(directive));
  }
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /X-Frame-Options: DENY/);
  assert.match(headers, /Referrer-Policy: strict-origin-when-cross-origin/);
});
