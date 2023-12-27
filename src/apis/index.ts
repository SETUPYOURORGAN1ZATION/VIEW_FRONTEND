import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ckihhpkzrzchekopdiii.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNraWhocGt6cnpjaGVrb3BkaWlpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzY3NjQxMSwiZXhwIjoyMDE5MjUyNDExfQ.GT3zOC8ZtjmO3CU9F3Yp439I5EIGU7peTMcLQe9HCdU"
);
