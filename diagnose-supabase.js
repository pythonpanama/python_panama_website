import { checkPublicAccess } from './scripts/check-supabase-access.mjs';

try {
    // HEAD alone cannot certify the migration: 1 = public grant, 2 = inconclusive.
    process.exitCode = await checkPublicAccess() ? 2 : 1;
} catch {
    console.error('No se pudo completar la comprobación. Revisa la configuración pública y la conectividad.');
    process.exitCode = 1;
}
