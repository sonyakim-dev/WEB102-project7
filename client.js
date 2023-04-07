import { createClient } from "@supabase/supabase-js";

const URL = "https://gxlqlykrysidaailldpe.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4bHFseWtyeXNpZGFhaWxsZHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTQyMTcsImV4cCI6MTk5NjIzMDIxN30.N9_bkfceiojkV61dOraz885RHvnJ0I5_dkhKqHZ-QiU";
const supabase = createClient(URL, API_KEY);

export { supabase };