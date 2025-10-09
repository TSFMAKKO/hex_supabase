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
  <h1>Product</h1>

  <div v-if="loading">載入中…</div>
  <div v-else>
    <div v-if="fetchError" class="error">發生錯誤：{{ fetchError }}</div>
    <div v-else>
      <div v-if="products.length === 0">目前沒有產品。</div>
      <ul class="products-list">
        <li v-for="p in products" :key="p.id" class="product">
          <strong>標題:{{ p.title }}</strong>
          <div>價格：{{ p.price }}</div>
          <div>
            <img :src="p.image_path" :alt="p.image_path" srcset="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { supabase } from './lib/supabase'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvjpgijmjbpbhwqrhvrg.supabase.co'
// TODO: move this to env in production
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2anBnaWptamJwYmh3cXJodnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTEzNzQsImV4cCI6MjA3NTQ4NzM3NH0.tmrOcck492sPMmddYpBBNqSQXey2os17tfKSVwLcT5I"
const supabase = createClient(supabaseUrl, supabaseKey)

const products = ref([])
const loading = ref(true)
const fetchError = ref(null)
const selectedFile = ref(null)
const files = ref([])
import { v4 as uuidv4 } from 'uuid'



// 選擇檔案
const handleFile = (event) => {
  selectedFile.value = event.target.files?.[0] ?? null
}

// 上傳檔案(成功)
// 如果檔案名稱重複，可以加 { upsert: true } 覆蓋現有檔案：
// .upload(selectedFile.value.name, selectedFile.value, { upsert: true })

// const upload = async () => {
//   if (!selectedFile.value) {
//     alert('請先選擇檔案')
//     return
//   }

//   const { data, error } = await supabase.storage
//     .from('products-images')
//     .upload(selectedFile.value.name, selectedFile.value) // 傳 File 物件
//   if (error) console.error('上傳失敗', error)
//   else console.log('上傳成功', data)
// }

// ✅ Read - 讀取商品列表
const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: false })
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


// 公開讀取(成功)
// const { data } = supabase.storage
//   .from('products-images')
//   .getPublicUrl('1.jpg')

// console.log(data.publicUrl) // 可直接用於 <img> 或 fetch



// 讀取檔案
// // https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public/
// https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public/products-images/inspiration-1.png
const getImgUrl = async (id) => {
  const { data, error } = await supabase.storage
    .from('products-images')
    .createSignedUrl(`${id}.jpg`, 60)

  if (!error) {
    const url = data.signedUrl
    console.log(url)
    return url
  }

}

// 上傳檔案(成功)
const uploadFile = async (file) => {
  const randomFileName = `${uuidv4()}.jpg`
  const { data, error } = await supabase.storage
    .from('products-images')
    .upload(randomFileName, file) // 第一個參數是檔名，第二個是 File 物件
  if (error) console.error('上傳失敗', error)
  else console.log('上傳成功', data)
  return { data, error }
}

// 對應 template 的上傳按鈕：呼叫上面的 uploadFile helper
const upload = async () => {
  if (!selectedFile.value) {
    alert('請先選擇檔案')
    return
  }

  // 檢查是否有登入的使用者
  try {
    const { data: userData, error: userErr } = await supabase.auth.getUser()
    if (userErr) console.warn('getUser error', userErr)
    const user = userData?.user

    if (!user) {
      // 未登入時詢問是否以匿名嘗試（僅測試用）
      const ok = confirm('未登入，是否以匿名方式嘗試上傳（測試用，正式環境請勿使用）？')
      if (!ok) return
    }

    const res = await uploadFile(selectedFile.value)
    // uploadFile 會在發生 error 時在 console.log，這裡回傳結果以便測試
    if (res?.error) {
      console.error('上傳失敗', res.error)
      alert(`上傳失敗：${res.error.message ?? JSON.stringify(res.error)}`)
    } else {
      alert('上傳完成 (測試)')
    }
  } catch (e) {
    console.error('upload handler error', e)
    alert(`上傳發生錯誤：${e?.message ?? e}`)
  }
}

// 覆蓋檔案(更新檔案)
// await supabase.storage.from('products-images').upload('phone.jpg', newFile, { upsert: true })


// 列出 bucket 裡的檔案（方便確認 key）
const listFiles = async (path = '') => {
  const { data, error } = await supabase.storage
    .from('products-images')
    .list(path)
  if (error) {
    console.error('listFiles error', error)
    return { data: null, error }
  }
  return { data, error: null }
}

const deleteFile = async (fileName) => {
  const { data, error } = await supabase.storage
    .from('products-images')  // bucket 名稱
    .remove([fileName])       // 傳陣列，即使只刪一個檔案

  if (error) {
    console.error('刪除失敗', error)
  } else {
    console.log('刪除成功', data)
  }
}

deleteFile("1.jpg") // 測試刪除檔案

const refreshFiles = async () => {
  const res = await listFiles('')
  if (res.error) {
    console.error('refreshFiles error', res.error)
    alert(`列出檔案失敗：${res.error.message ?? res.error}`)
    return
  }
  console.log('listFiles', res.data);

  files.value = res.data ?? []
}

refreshFiles()


// 範例：使用 <input type="file">
// const file = document.querySelector('#fileInput').files[0]
// uploadFile(file)


// 把要v-for的資料要 map 出來處理
// 回傳的時候 多一筆src = getImgUrl(item.id)

onMounted(async () => {
  loading.value = true
  fetchError.value = null
  try {
    const data = await getProducts()
    products.value = data ?? []
    // 處理圖片路徑
    const imgBaseUrl = 'https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public'
    products.value = products.value.map(p => {
      return {
        ...p,
        image_path: `${imgBaseUrl}/${p.image_path}`
      }
    })

    console.log('products', products.value)
    // 取得 session/user 與列出 bucket 檔案（安全地在生命週期內呼叫）
    try {
      const s = await supabase.auth.getSession()
      console.log('session', s)
      const u = await supabase.auth.getUser()
      console.log('user', u)
    } catch (e) {
      console.warn('get session/user failed (likely no session)', e)
    }

    try {
      await refreshFiles()
    } catch (e) {
      console.warn('refreshFiles failed', e)
    }
  } catch (err) {
    console.error('Failed to load products', err)
    fetchError.value = err?.message || String(err)
  } finally {
    loading.value = false
  }

})

// 
// 範例：新增三筆商品
// await addProduct('手機', 20000)
// await addProduct('筆記型電腦', 36000)
// await addProduct('耳機', 3000)


// 範例：更新 id=2 的商品
// await updateProduct(2, '筆電', 35000)



// 範例：刪除 id=3 的商品
// await deleteProduct(3)


</script>
