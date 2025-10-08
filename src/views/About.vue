<style></style>
<template>
  <h1>About Page</h1>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://uvjpgijmjbpbhwqrhvrg.supabase.co'
// const supabaseKey = process.env.supabaseKey
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2anBnaWptamJwYmh3cXJodnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTEzNzQsImV4cCI6MjA3NTQ4NzM3NH0.tmrOcck492sPMmddYpBBNqSQXey2os17tfKSVwLcT5I"
// export 
const supabase = createClient(supabaseUrl, supabaseKey)

// ✅ Read - 取得所有待辦
const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: false })
  if (error) throw error
  return data
}



const data = await getProducts()
console.log(data)



</script>
