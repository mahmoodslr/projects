import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://whrmhbvmxnhlmmoasqic.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indocm1oYnZteG5obG1tb2FzcWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MjY1NTMsImV4cCI6MjA1NjUwMjU1M30.cPNOT2GPqA2NEkEhBmANWsBoEojVRPyvRgnvtFOo3Qc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

