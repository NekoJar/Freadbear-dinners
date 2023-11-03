import { createClient } from "@supabase/supabase-js";

export const supabaseurl = "https://lxyyyjuwyzrtnibwbwjo.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4eXl5anV3eXpydG5pYndid2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5MDU3NzEsImV4cCI6MjAxNDQ4MTc3MX0.ROLYCimLNiOC96v2JKns9IMKfnUcQJbGVX2bnaQL7fc";

const supabase = createClient(supabaseurl, supabaseKey);

export default supabase;
