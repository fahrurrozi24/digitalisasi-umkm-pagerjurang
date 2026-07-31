import { supabase } from "../lib/supabase";

export async function getUmkm() {
  const { data, error } = await supabase
    .from("umkm")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}