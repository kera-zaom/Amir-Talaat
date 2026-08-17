// js/supabase.js

const SUPABASE_URL =
    "https://mxhtmolljnjfqhxcgjff.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_bzaMkNmdzkYRqbPZHIov6A_pPfVyW4n";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );