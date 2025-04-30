import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qdvjfridtvrlbxqjqdwn.supabase.co';
const supabaseAnonKey = 'sua-chave-anon-completa-aqui';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);