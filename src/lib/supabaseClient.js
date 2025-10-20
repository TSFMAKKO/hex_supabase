
import { createClient } from "@supabase/supabase-js";

// Supabase 設定
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
// 實務上不建議把 key 放在前端
// 建議放在後端或 serverless functions
// 這裡用 supabaseKey 只是為了示範
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default { supabase };