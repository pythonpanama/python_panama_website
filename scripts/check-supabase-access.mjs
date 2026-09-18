// Read-only diagnostic: no personal records, writes or counts are requested.
export async function checkPublicAccess() {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  let publicKey = key?.startsWith('sb_publishable_');
  if (key && !publicKey) {
    try {
      publicKey = JSON.parse(Buffer.from(key.split('.')[1], 'base64url').toString()).role === 'anon';
    } catch { publicKey = false; }
  }
  if (!url || new URL(url).protocol !== 'https:' || !publicKey) {
    throw new Error('Define an HTTPS Supabase URL and a public anon/publishable key. Administrative keys are not accepted.');
  }
  let closed = true;
  for (const table of ['volunteers', 'python_route_registrations']) {
    const target = new URL(`/rest/v1/${table}?select=id&limit=0`, url);
    const response = await fetch(target, {
      method: 'HEAD',
      headers: { apikey: key, ...(key.startsWith('sb_publishable_') ? {} : { Authorization: `Bearer ${key}` }) },
      signal: AbortSignal.timeout(10000),
    });
    // A HEAD denial alone cannot distinguish invalid credentials from revoked grants.
    console.log(`${table}: HTTP ${response.status}; no records requested.`);
    if (response.ok) {
      closed = false;
      console.log('Unexpected: public SELECT grant is still available. Verify grants and RLS with an administrator.');
    } else {
      console.log('Access denied or unavailable; administrative inspection is still required to confirm the migration.');
    }
  }
  return closed;
}
