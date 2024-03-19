import {createClient} from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(REACT_APP_API_URL, REACT_APP_API_KEY)