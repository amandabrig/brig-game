import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qdvjfridtvrlbxqjqdwn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // sua chave completa

export const supabase = createClient(supabaseUrl, supabaseAnonKey);