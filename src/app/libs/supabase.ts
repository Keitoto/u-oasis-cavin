import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
if (!supabaseKey || !supabaseUrl)
  throw new Error('supabase auth failed')
export const supabase = createClient(supabaseUrl, supabaseKey)
