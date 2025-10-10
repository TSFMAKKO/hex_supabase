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
  <!-- <h1>Edit</h1> -->
  <div class="flex w-full px-5 h-[80px] mb-[32px]">
    <div class="flex w-[1296px] m-0 mx-auto justify-between items-center">
      <div class="flex items-center">
        <h1 class="text-[20px] font-[700] leading-[150%] font-mina tracking-[4.4%] mr-[48px]">URBNSTEP</h1>
        <div class="flex max-sm:hidden">
          <p class="mr-[40px] font-[500] font-noto text-[16px] leading-[150%] tracking-[5%]">
            產品列表</p>
          <p class=" font-[500] text-[16px] font-noto leading-[150%] tracking-[5%]">
            品牌故事</p>

        </div>
      </div>
      <div>
        <img src="../assets/Vector.svg" alt="" srcset="">
      </div>
    </div>

  </div>

  <div class="flex w-full px-5 mb-[24px]">
    <div class="flex w-[1296px] m-0 mx-auto gap-[12px] ">
      <span>首頁</span>
      <span>/</span>
      <span>女鞋</span>
      <span>/</span>
      <span>所有產品</span>
    </div>

  </div>


  <div class="flex w-full px-5 mb-[24px]">
    <div class="w-[1296px] m-0 mx-auto text-[28px] font-[700] leading-[120%] tracking-[5%] ">
      女鞋
    </div>
  </div>

  <!--  -->
  <!-- text-[28px] font-[700] leading-[120%] tracking-[5%] -->
  <div class="flex w-full px-5 mb-[24px]">
    <div class="flex w-[1296px] m-0 mx-auto gap-[24px]">
      <div
        class="w-[196px] flex flex-col gap-y-[16px] max-sm:hidden leading-[150%] font-[500] text-[16px] tracking-[5%]">
        <div class="h-[48px] w-[172px] flex items-center leading-[150%] font-[500] text-[16px] tracking-[5%]">所有產品</div>
        <div class="h-[48px] w-[172px] flex items-center">慢跑鞋</div>
        <div class="h-[48px] w-[172px] flex items-center">滑板鞋</div>
        <div class="h-[48px] w-[172px] flex items-center">後底鞋</div>
        <div class="h-[48px] w-[172px] flex items-center">限定 / 聯名企劃</div>

      </div>
      <div class="max-w-[1076px]">
        <!-- <div class="flex w-[33.3%]">aaa</div> -->
        <!-- <div v-if="loading">載入中…</div> -->
        <!-- <div v-else> -->
        <!-- <div v-if="fetchError" class="error">發生錯誤：{{ fetchError }}</div> -->
        <!-- <div v-else> -->
        <!-- <div v-if="products.length === 0">目前沒有產品。</div> -->
        <ul
          class="products-list flex flex-wrap gap-x-[24px] max-sm:gap-x-[12px] gap-y-[48px] max-sm:gap-y-[24px] !mt-[0px] mb-[48px]">
          <li v-for="p in products" :key="p.id"
            class="product w-[calc(33.3%-16px)] max-sm:w-[calc(50%-6px)] h-[342px] flex flex-col justify-between !border-b-0">
            <template v-if="p?.isEdit === false || p?.isEdit === undefined">
              <div class="mb-[12px] max-w-sm mx-auto ">
                <!--   <img :key="p.imageUrl" :src="p.src + '?t=' + Date.now()" :alt="p.src" srcset="">   -->
                <img class="w-full h-auto max-h-[260px] object-cover " :key="p.src" :src="p.src" :alt="p.src" srcset="">
              </div>
              <div class="flex flex-col gap-y-[4px]">
                <strong>{{ p.title }}</strong>
                <div>NT${{ p.price.toLocaleString() }}</div>
                <div class="flex gap-x-[8px]">
                  <!-- 編輯按鈕 -->
                  <button type="button" @click="editHandler(p)">編輯</button>
                  <!-- 刪除按鈕 -->
                  <button type="button" @click="delHandler(p?.image_path, p?.id)">刪除</button>
                </div>
              </div>


            </template>
            <template v-else>
              <img :src="tempEdit.src" :alt="tempEdit.src" srcset="">
              <input type="text" v-model="tempEdit.title" />
              <input type="number" v-model="tempEdit.price" />
              <!--  -->
              <input type="file" @change="handleFile" />
              <!-- <button @click="upload">更換新圖片</button> -->
              <button type="button" @click="saveHandler(p)">儲存</button>
              <button type="button" @click="() => { p.isEdit = false }">取消</button>

            </template>


          </li>
        </ul>
        <div class="flex justify-center items-center gap-x-[8px]">
          <a href="">
            <img class="w-[20px] h-[20px]" src="../assets/left.png" alt="" srcset="">
          </a>
          <a href="" class="p-[12px] block">1</a>
          <a href="" class="p-[12px] block">2</a>
          <a href="" class="p-[12px] block">3</a>
          <a href="">
            <img class="w-[20px] h-[20px]" src="../assets/right.png" alt="" srcset=""></img>
          </a>
        </div>
        <!-- </div> -->
        <!-- </div> -->

      </div>
    </div>
  </div>

  <div class="flex w-full justify-center items-center gap-x-[24px] h-[96px] bg-[#E8FEC5]">
    <div class="flex text-[24px] font-[700] leading-[120%] tracking-[5%]">加入會員取得 9 折優惠</div>
    <div><a class="black px-[24px] py-[12px] bg-[#212529] text-[#FFFFFF] rounded-[4px]" href="">馬上註冊</a></div>
  </div>

  <div class="flex w-full px-5 mb-[24px] ">
    <div
      class="flex max-sm:items-start max-sm:flex-col h-[48px] items-center justify-between w-[1296px] m-0 mx-auto max-sm:gap-y-[8px] ">
      <div class="text-[28px] font-[700] leading-[120%] tracking-[5%] py-[8px] px-[12px]">URBNSTEP</div>
      <div
        class="flex max-sm:flex-col gap-x-[40px] max-sm:gap-y-[4px] text-[16px] font-[500] leading-[150%] tracking-[5%] px-[12px]">
        <div class="w-full text-left">商品列表</div>
        <div class=" w-full text-left">品牌故事</div>
      </div>
    </div>
  </div>

  <!--  -->
  <div
    class="w-full px-[12px] ">
    <div class="border-t border-t-[#DEE2E6] max-w-[1296px] mx-auto mb-[50px] text-[14px] text-[#6C757D] leading-[150%] font-[400] tracking-[5%] text-center">
      <div class="mt-[32px] mb-[4px] ">Copyright ©2025 URBNSTYLE</div>
      <div class="">All Rights Reserved.</div>
    </div>

  </div>





</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { supabase } from './lib/supabase'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvjpgijmjbpbhwqrhvrg.supabase.co'
// 實務上不建議把 key 放在前端
// 建議放在後端或 serverless functions
// 這裡用 supabaseKey 只是為了示範
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2anBnaWptamJwYmh3cXJodnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTEzNzQsImV4cCI6MjA3NTQ4NzM3NH0.tmrOcck492sPMmddYpBBNqSQXey2os17tfKSVwLcT5I"
const supabase = createClient(supabaseUrl, supabaseKey)
const imgBaseUrl = 'https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public'

const products = ref([])
const loading = ref(true)
const fetchError = ref(null)
const selectedFile = ref(null)
const files = ref([])

const tempEdit = ref({})
const EditId = ref('')
import { v4 as uuidv4 } from 'uuid'


// 編輯
const editHandler = (p) => {
  console.log("products", products.value);

  // 取消所有 isEdit 狀態
  products.value.forEach(item => item.isEdit = false)


  p.isEdit = true
  tempEdit.value = { ...p }
  console.log("tempEdit:", tempEdit.value);

  EditId.value = p.id

}


const saveHandler = async (p) => {
  // await updateProduct(tempEdit.value.id, tempEdit.value.title, tempEdit.value.price)
  let randomName = ""
  // 先判斷 selectedFile 是否有東西
  if (!selectedFile.value) {
    // 沒有就直接更新文字
    // 修改資料表
    await updateProduct({ id: tempEdit.value.id, title: tempEdit.value.title, price: tempEdit.value.price, image_path: p.image_path })

  } else {
    const imgName = p.image_path?.split('/').pop() ?? ''
    console.log("imgName", imgName);

    // 先刪除圖片
    deleteFile(imgName)
    // 上傳(修改)圖片(用隨機id之後再修改資料表)
    randomName = uuidv4() + '.jpg'
    console.log("randomName", randomName);
    upload(randomName)
    // 修改資料表
    await updateProduct({ id: tempEdit.value.id, title: tempEdit.value.title, price: tempEdit.value.price, image_path: `products-images/${randomName}` })


  }







  // 修改前端(有修改圖片的話)
  // if (selectedFile.value) {
  products.value = products.value.map((item) => {
    if (item.id === p.id) {
      //  src: `${imgBaseUrl}/${imgName}`

      let obj = {
        id: tempEdit.value.id, title: tempEdit.value.title, price: tempEdit.value.price,
        image_path: p.image_path,
        src: p.src,
        isEdit: false
      }

      // const imgPath = await getImgUrl(`${randomName}`)
      if (selectedFile.value) {
        obj = {
          id: tempEdit.value.id, title: tempEdit.value.title, price: tempEdit.value.price,
          image_path: `${randomName}`,
          src: `${imgBaseUrl}/products-images/${randomName}?t=${Date.now()}`,
          // src2: `${imgPath}?t=${Date.now()}`,
          isEdit: false
        }
      }

      console.log("obj", obj);

      return obj
    }
    return item
  })




}

// 刪除
const delHandler = async (image_path, id) => {
  if (!confirm('確定要刪除？')) return

  // 取出檔名（支援 path/filename.jpg 或 直接 filename.jpg）
  const imgName = image_path?.split('/').pop() ?? ''
  console.log("imgName", imgName);


  try {
    // 刪除圖檔（await 必要）
    const { data: delData, error: delErr } = await deleteFile(imgName)
    if (delErr) {
      console.error('刪除檔案失敗', delErr)
      alert(`刪除檔案失敗：${delErr.message ?? delErr}`)
      return
    }

    console.log('刪除檔案成功', delData)

    if (!error) {
      // 刪除 product 資料
      await deleteProduct(id)

      // 更新列表
      products.value = products.value.filter(item => item.id !== id)

      alert('刪除成功')
    }

  } catch (e) {
    console.error('delHandler error', e)
    alert(`刪除發生錯誤：${e?.message ?? e}`)
  }
}

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
const updateProduct = async ({ id, title, price, image_path }) => {
  const { data, error } = await supabase
    .from('products')
    .update({ title, price, image_path })
    .eq('id', id)
  if (error) throw error
  return data
}

// 抓取product 圖庫位置
// 刪除圖庫 假如回傳成功
// 繼續刪除product 表單資料(用id)
// ✅ Delete - 刪除商品(procut表單)
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
const getImgUrl = async (path) => {
  const { data, error } = await supabase.storage
    .from('products-images')
    .createSignedUrl(`${path}`, 60)

  if (!error) {
    const url = data.signedUrl
    console.log(url)
    return url
  }

}


// 上傳檔案(成功)
const uploadFile = async (file, name) => {
  // 不能用隨機名子 要用原先的名子
  // const randomFileName = `${uuidv4()}.jpg`
  const { data, error } = await supabase.storage
    .from('products-images')
    .upload(name, file, { upsert: true }) // 第一個參數是檔名，第二個是 File 物件 { upsert: true } 可複寫
  if (error) console.error('上傳失敗', error)
  else console.log('上傳成功', data)
  return { data, error }
}

// 對應 template 的上傳按鈕：呼叫上面的 uploadFile helper
const upload = async (name, id) => {
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
      const ok = confirm('確定更換新圖片？')
      if (!ok) return
    }

    const res = await uploadFile(selectedFile.value, name)
    // uploadFile 會在發生 error 時在 console.log，這裡回傳結果以便測試
    if (res?.error) {
      console.error('上傳失敗', res.error)
      alert(`上傳失敗：${res.error.message ?? JSON.stringify(res.error)}`)
    } else {
      alert('上傳完成 (測試)')
      selectedFile.value = null
      // 清空 input[type=file] 的值（可選）
      // document.querySelector('input[type="file"]').value = ''

      // src: `${imgBaseUrl}/${imgName}`
      // products.value = products.value.map(item => {
      //   if (item.id === id) {
      //     item.src = `${imgBaseUrl}/${name}?t=${Date.now()}`
      //     return item
      //   }
      //   return item
      // })
      // console.log("products.value", products.value);
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

  return { data, error }
}

// deleteFile("1.jpg") // 測試刪除檔案


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
    products.value = products.value.map(p => {
      return {
        ...p,
        src: `${imgBaseUrl}/${p.image_path}`
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
