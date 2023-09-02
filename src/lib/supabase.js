import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cakdxpnkkjhsfmioosot.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNha2R4cG5ra2poc2ZtaW9vc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MzAwMjEsImV4cCI6MjAwODEwNjAyMX0.xxMNgT6MAQqBMGrytFEJInX-yNRhoOSLdzZ0od4TbCg";

export default createClient(supabaseUrl, supabaseAnonKey);