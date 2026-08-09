const SUPABASE_URL = "https://ffrsqutaqqxnfmkjnzhg.supabase.co";
const SUPABASE_KEY = "sb_publishable_anU48SsDFt5QZthETgtHhg_FrGEb3Zs";

console.log("URL utilisée :", SUPABASE_URL);

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Client :", supabaseClient);
console.log("Auth URL :", supabaseClient.auth.url);
