import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xyfgbrcpjzcfvvqaomap.supabase.co",
  "sb_publishable_GPfK4SNwb7K4LV3TCoVCUQ_G1ldyKf4"
);

export default supabase;