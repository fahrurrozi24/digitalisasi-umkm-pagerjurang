import { supabase } from "../lib/supabase";

export async function getContact() {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .single();

  if (error) throw error;

  return data;
}