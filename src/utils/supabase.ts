import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | undefined;

export function getSupabase() {
    if (client) return client;
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!url || !key || !url.startsWith('https://')) {
        throw new Error('Supabase public configuration is missing or invalid.');
    }
    // Only public credentials belong in a browser bundle. Never accept service_role.
    if (!key.startsWith('sb_publishable_')) {
        let role: unknown;
        try {
            const payload: unknown = JSON.parse(atob(key.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
            role = typeof payload === 'object' && payload !== null && 'role' in payload ? payload.role : undefined;
        } catch {
            throw new Error('Invalid public Supabase key.');
        }
        if (role !== 'anon') throw new Error('Only public Supabase keys are allowed.');
    }
    client = createClient(url, key, {
        auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    });
    return client;
}
