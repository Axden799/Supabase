import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://epetsozndcgkbathpxpx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwZXRzb3puZGNna2JhdGhweHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MTIxMTUsImV4cCI6MTk5MDA4ODExNX0.8CFJNPlqCtQLH9DxQyw4-31VyViT2PyryBEjhFLJJIQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase