import { supabase } from "./supabaseClient"

export async function getLunarDataByDate(date: string) {
  const { data, error } = await supabase
    .from("lunar_data")
    .select("*")
    .eq("date", date)
    .single()

  if (error) {
    console.error("Erreur Supabase :", error)
    return null
  }

  return data
}
