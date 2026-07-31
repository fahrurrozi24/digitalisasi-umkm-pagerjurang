import { supabase } from "../lib/supabase";

export async function getProfile() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .single();

  if (error) throw error;

  return data;
}

export async function updateProfile(id, profile) {
  const { data, error } = await supabase
    .from("profiles")
    .update(profile)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}