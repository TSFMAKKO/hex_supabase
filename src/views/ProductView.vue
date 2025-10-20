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
  <div class="flex w-full px-5 mb-[24px]">
    <div class="flex w-[1296px] m-0 mx-auto gap-[12px] text-[#6C757D]">
      <span>首頁</span>
      <span>/</span>
      <span>
        <span v-if="sex === 'women'">女</span>
        <span v-else-if="sex === 'men'">男</span>
        鞋</span>

      <span>/</span>
      <span class="text-[#343A40]">{{ breadcrumb_type }}</span>
    </div>
  </div>
  <ShoeGender />

  <!--  -->
  <!-- text-[28px] font-[700] leading-[120%] tracking-[5%] -->
  <div class="flex w-full px-5 mb-[24px]">
    <div class="flex w-[1296px] m-0 mx-auto gap-[24px]">
      <ShoeType />

      <Card />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

import { useRoute } from "vue-router";
import Card from "./product/CardView.vue";
const route = useRoute();

const sex = computed(() => route.params.sex || "all");
console.log("sex:", sex.value);

const category = computed(() => route.params.category || "all");
console.log("category:", category.value);

const breadcrumb_type = computed(() => {
  if (category.value === "all") {
    return "所有產品";
  } else if (category.value === "running") {
    return "慢跑鞋";
  } else if (category.value === "skateboarding") {
    return "滑板鞋";
  } else if (category.value === "loafers") {
    return "厚底鞋";
  } else if (category.value === "limited") {
    return "限量 / 聯名企劃";
  }
});

import ShoeType from "../components/product/ShoeType.vue";
import ShoeGender from "../components/product/ShoeGender.vue";
import supabase from "../lib/supabaseClient";

const imgBaseUrl = "https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public";


// 狀態管理
const products = ref([]);
const loading = ref(true);
const fetchError = ref(null);
const selectedFile = ref(null);
const files = ref([]);

const tempEdit = ref({});
const EditId = ref("");
import { v4 as uuidv4 } from "uuid";
import router from "../router";

// 編輯
const editHandler = (p) => {
  console.log("產品列表：", products.value);
  products.value.forEach((item) => (item.isEdit = false));
  p.isEdit = true;
  tempEdit.value = { ...p };
  console.log("暫存編輯資料：", tempEdit.value);

  EditId.value = p.id;
};

const saveHandler = async (p) => {
  // 儲存商品變更（包含可能的圖片更新）
  // await updateProduct(tempEdit.value.id, tempEdit.value.title, tempEdit.value.price)
  let randomName = "";
  // 先判斷 selectedFile 是否有東西
  if (!selectedFile.value) {
    // 沒有就直接更新文字
    // 修改資料表
    await updateProduct({
      id: tempEdit.value.id,
      title: tempEdit.value.title,
      price: tempEdit.value.price,
      image_path: p.image_path,
    });
  } else {
    const imgName = p.image_path?.split("/").pop() ?? "";
    console.log("圖檔檔名：", imgName);

    // 先刪除圖片
    deleteFile(imgName);
    // 上傳(修改)圖片(用隨機id之後再修改資料表)
    randomName = uuidv4() + ".jpg";
    console.log("新圖檔名稱：", randomName);
    upload(randomName);
    // 修改資料表
    await updateProduct({
      id: tempEdit.value.id,
      title: tempEdit.value.title,
      price: tempEdit.value.price,
      image_path: `products-images/${randomName}`,
    });
  }

  // 修改前端(有修改圖片的話)
  // 更新前端 products 陣列中的對應項目
  products.value = products.value.map((item) => {
    if (item.id === p.id) {
      let obj = {
        id: tempEdit.value.id,
        title: tempEdit.value.title,
        price: tempEdit.value.price,
        image_path: p.image_path,
        src: p.src,
        isEdit: false,
      };

      if (selectedFile.value) {
        obj = {
          id: tempEdit.value.id,
          title: tempEdit.value.title,
          price: tempEdit.value.price,
          image_path: `products-images/${randomName}`,
          src: `${imgBaseUrl}/products-images/${randomName}?t=${Date.now()}`,
          isEdit: false,
        };
      }

      console.log("更新後物件：", obj);

      return obj;
    }
    return item;
  });
};

// 刪除
const delHandler = async (image_path, id) => {
  // 刪除商品：包含刪除 Storage 檔案與 DB 紀錄
  if (!confirm("確定要刪除？")) return;

  // 取出檔名（支援 path/filename.jpg 或 直接 filename.jpg）
  const imgName = image_path?.split("/").pop() ?? "";
  console.log("圖檔檔名：", imgName);

  try {
    // 刪除圖檔（await 必要）
    const { data: delData, error: delErr } = await deleteFile(imgName);
    if (delErr) {
      console.error("刪除檔案失敗", delErr);
      alert(`刪除檔案失敗：${delErr.message ?? delErr}`);
      return;
    }

    console.log("刪除檔案成功", delData);

    if (!delErr) {
      // 刪除 product 資料
      await deleteProduct(id);

      // 更新列表
      products.value = products.value.filter((item) => item.id !== id);

      alert("刪除成功");
    }
  } catch (e) {
    console.error("delHandler error", e);
    alert(`刪除發生錯誤：${e?.message ?? e}`);
  }
};

// 選擇檔案
const handleFile = (event) => {
  // 接收使用者選擇的檔案
  selectedFile.value = event.target.files?.[0] ?? null;
};

// 如果檔案名稱重複，可以加 { upsert: true } 覆蓋現有檔案：

// ✅ Read - 讀取商品列表
const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });
  if (error) throw error;
  return data;
};

// ✅ Create - 新增商品
const addProduct = async (title, price) => {
  const { data, error } = await supabase.from("products").insert([{ title, price }]);
  if (error) throw error;
  return data;
};

// ✅ Update - 更新商品名稱與價格
const updateProduct = async ({ id, title, price, image_path }) => {
  const { data, error } = await supabase
    .from("products")
    .update({ title, price, image_path })
    .eq("id", id);
  if (error) throw error;
  return data;
};

// 抓取product 圖庫位置
// 刪除圖庫 假如回傳成功
// 繼續刪除product 表單資料(用id)
// ✅ Delete - 刪除商品(procut表單)
const deleteProduct = async (id) => {
  // 刪除商品（資料表 products 中的紀錄）
  const { data, error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw error;
  return data;
};

// 讀取檔案
// // https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public/
// https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public/products-images/inspiration-1.png
const getImgUrl = async (path) => {
  // 產生圖片簽名網址（短效 60 秒）
  const { data, error } = await supabase.storage
    .from("products-images")
    .createSignedUrl(`${path}`, 60);

  if (!error) {
    const url = data.signedUrl;
    console.log("簽名網址：", url);
    return url;
  }
};

// 上傳檔案(成功)
const uploadFile = async (file, name) => {
  // 上傳檔案到 Storage（可覆蓋 upsert）
  const { data, error } = await supabase.storage
    .from("products-images")
    .upload(name, file, { upsert: true }); // 第一個參數是檔名，第二個是 File 物件 { upsert: true } 可複寫
  if (error) console.error("上傳失敗", error);
  else console.log("上傳成功", data);
  return { data, error };
};

// 對應 template 的上傳按鈕：呼叫上面的 uploadFile helper
const upload = async (name, id) => {
  if (!selectedFile.value) {
    alert("請先選擇檔案");
    return;
  }

  // 檢查是否有登入的使用者
  try {
    const { data: userData, error: userErr } = await supabase.auth.getUser();
    if (userErr) console.warn("getUser error", userErr);
    const user = userData?.user;

    if (!user) {
      const ok = confirm("確定更換新圖片？");
      if (!ok) return;
    }

    const res = await uploadFile(selectedFile.value, name);
    if (res?.error) {
      console.error("上傳失敗", res.error);
      alert(`上傳失敗：${res.error.message ?? JSON.stringify(res.error)}`);
    } else {
      alert("上傳完成 (測試)");
      selectedFile.value = null;
    }
  } catch (e) {
    console.error("upload handler error", e);
    alert(`上傳發生錯誤：${e?.message ?? e}`);
  }
};

// 列出 bucket 裡的檔案（方便確認 key）
const listFiles = async (path = "") => {
  // 列出 Storage 中的檔案（供除錯或後台管理用）
  const { data, error } = await supabase.storage.from("products-images").list(path);
  if (error) {
    console.error("listFiles error", error);
    return { data: null, error };
  }
  return { data, error: null };
};

// 刷新圖庫列表（避免 refreshFiles 未定義導致錯誤）
const refreshFiles = async () => {
  try {
    const { data, error } = await listFiles("");
    if (error) {
      console.warn("刷新圖庫列表失敗", error);
      return;
    }
    files.value = Array.isArray(data) ? data : [];
  } catch (e) {
    console.warn("刷新圖庫列表例外", e);
  }
};

const deleteFile = async (fileName) => {
  // 自 Storage 刪除指定檔案
  const { data, error } = await supabase.storage
    .from("products-images") // bucket 名稱
    .remove([fileName]); // 傳陣列，即使只刪一個檔案

  if (error) {
    console.error("刪除失敗", error);
  } else {
    console.log("刪除成功", data);
  }

  return { data, error };
};

// deleteFile("1.jpg") // 測試刪除檔案


onMounted(async () => {
  // 初始化：讀取產品、處理圖片 URL、讀取使用者狀態與 Storage 列表
  loading.value = true;
  fetchError.value = null;
  try {
    const data = await getProducts();
    // 正常化 image_path：確保皆為 'products-images/<檔名>'
    products.value = (data ?? []).map((p) => {
      const normalizedPath = p?.image_path?.startsWith("products-images/")
        ? p.image_path
        : `products-images/${p?.image_path ?? ""}`;
      return {
        ...p,
        image_path: normalizedPath,
        src: `${imgBaseUrl}/${normalizedPath}`,
      };
    });

    console.log("產品列表：", products.value);
    try {
      const s = await supabase.auth.getSession();
      console.log("使用者 Session：", s);
      const u = await supabase.auth.getUser();
      console.log("使用者資料：", u);
    } catch (e) {
      console.warn("取得 session/user 失敗（可能尚未登入）", e);
    }

    try {
      await refreshFiles();
    } catch (e) {
      console.warn("刷新圖庫列表失敗", e);
    }
  } catch (err) {
    console.error("Failed to load products", err);
    fetchError.value = err?.message || String(err);
  } finally {
    loading.value = false;
  }
});
</script>
