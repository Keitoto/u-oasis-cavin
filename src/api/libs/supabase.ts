import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vjchclouzeyjvsskiche.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
if (!supabaseKey)
  throw new Error('supabase auth failed')
export const supabase = createClient(supabaseUrl, supabaseKey)
