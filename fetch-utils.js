const SUPABASE_URL = 'https://pwsxvrnlhooihwcxftvf.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3c3h2cm5saG9vaWh3Y3hmdHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDg2MzQsImV4cCI6MTk4MzY4NDYzNH0.ITSI6KK7aGizRAaYZ1zCgnyVWSXCZKMfeSCKISd7IXg';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export function checkError({ data, error }) {
    if (error) {
        return console.error(error);
    } else {
        return data;
    }
}

export async function fetchAllProfiles() {
    const response = await client.from('profiles').select().order('popularity');

    return checkError(response);
}

export async function fetchProfile(id) {
    const response = await client.from('profiles').select('*').match({ id }).single();
    return checkError(response);
}

export async function incrementPopularity(id) {
    const profile = await fetchProfile(id);

    const response = await client
        .from('profiles')
        .update({ popularity: profile.popularity + 1 })
        .match({ id })
        .single();

    return checkError(response);
}

export async function decrementPopularity(id) {
    const profile = await fetchProfile(id);

    const response = await client
        .from('profiles')
        .update({ popularity: profile.popularity - 1 })
        .match({ id })
        .single();

    return checkError(response);
}
