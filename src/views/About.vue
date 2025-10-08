<style>
/* 可以放一些簡單樣式 */
.products-list {
  margin-top: 1rem;
}

.product {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
</style>

<template>
  <h1>About Page</h1>

  <div v-if="loading">載入中…</div>
  <div v-else>
    <div v-if="fetchError" class="error">發生錯誤：{{ fetchError }}</div>
    <div v-else>
      <div v-if="products.length === 0">目前沒有產品。</div>
      <ul class="products-list">
        <li v-for="p in products" :key="p.id" class="product">
          <strong>{{ p.name }}</strong>
          <div>價格：{{ p.price }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvjpgijmjbpbhwqrhvrg.supabase.co'
// TODO: move this to env in production
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2anBnaWptamJwYmh3cXJodnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTEzNzQsImV4cCI6MjA3NTQ4NzM3NH0.tmrOcck492sPMmddYpBBNqSQXey2os17tfKSVwLcT5I"
const supabase = createClient(supabaseUrl, supabaseKey)

const products = ref([])
const loading = ref(true)
const fetchError = ref(null)

const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', 
    // { ascending: false }
  )
  if (error) throw error
  return data
}


// ✅ Create - 新增商品
const addProduct = async (title, price) => {
  const { data, error } = await supabase
    .from('products')
    .insert([{ title, price }])
  if (error) throw error
  return data
}

// ✅ Update - 更新商品名稱與價格
const updateProduct = async (id, title, price) => {
  const { data, error } = await supabase
    .from('products')
    .update({ title, price })
    .eq('id', id)
  if (error) throw error
  return data
}

// ✅ Delete - 刪除商品
const deleteProduct = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)
  if (error) throw error
  return data
}

onMounted(async () => {
  loading.value = true
  fetchError.value = null
  try {
    const data = await getProducts()
    products.value = data ?? []
    console.log('products', products.value)
  } catch (err) {
    console.error('Failed to load products', err)
    fetchError.value = err?.message || String(err)
  } finally {
    loading.value = false
  }



// 
// 範例：新增三筆商品
// await addProduct('手機', 20000)
// await addProduct('筆記型電腦', 36000)
// await addProduct('耳機', 3000)


// 範例：更新 id=2 的商品
// await updateProduct(2, '筆電', 35000)



// 範例：刪除 id=3 的商品
// await deleteProduct(3)

})
</script>
