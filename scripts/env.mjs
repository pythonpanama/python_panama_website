import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

// Same values Vite sees: .env files plus the build environment (Netlify),
// so the CSP and the prerendered HTML match what the client bundle does.
const root = fileURLToPath(new URL('..', import.meta.url));
export const env = loadEnv(process.env.MODE || 'production', root, '');

// Keep in sync with the pattern in src/analytics.ts. An invalid ID fails the
// build instead of opening the CSP for a script the client will never load.
const gaId = env.VITE_GA_MEASUREMENT_ID?.trim();
if (gaId && !/^G-[A-Z0-9]+$/.test(gaId)) {
  throw new Error(`VITE_GA_MEASUREMENT_ID inválido: "${gaId}". Debe tener el formato G-XXXXXXXXXX.`);
}
export const gaMeasurementId = gaId || '';
