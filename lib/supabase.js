import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tu-proyecto-id.supabase.co' // Ejemplo: https://abc123.supabase.co
const supabaseAnonKey = 'tu-anon-key' // Ejemplo: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
