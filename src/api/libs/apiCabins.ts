import type { ICabin } from '@/types'
import { supabase } from '@/api/libs/supabase'

export async function getCabins() {
  try {
    const { data } = await supabase
      .from('cabins')
      .select('*')
    return data satisfies ICabin[] | null
  }
  catch (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }
}
