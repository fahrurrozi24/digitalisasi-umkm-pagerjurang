import { supabase } from "../lib/supabase";

export async function getTourism() {
  const { data, error } = await supabase
    .from("tourism")
    .select("*");

  if (error) throw error;

  return data;
}