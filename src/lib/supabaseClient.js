
import { createClient } from "@supabase/supabase-js";

// Supabase 設定
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
// 實務上不建議把 key 放在前端
// 建議放在後端或 serverless functions
// 這裡用 supabaseKey 只是為了示範
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "";
export const supabase = createClient(supabaseUrl, supabaseKey);


// ✅ Create - 新增商品
export const addProduct = async (title, price) => {
    const { data, error } = await supabase.from("products").insert([{ title, price }]);
    if (error) throw error;
    return data;
};

// ✅ Update - 更新商品名稱與價格
export const updateProduct = async ({ id, title, price, image_path }) => {
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
export const deleteProduct = async (id) => {
    // 刪除商品（資料表 products 中的紀錄）
    const { data, error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;
    return data;
};

// 讀取檔案
// // https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public/
// https://uvjpgijmjbpbhwqrhvrg.supabase.co/storage/v1/object/public/products-images/inspiration-1.png
export const getImgUrl = async (path) => {
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
export const uploadFile = async (file, name) => {
    // 上傳檔案到 Storage（可覆蓋 upsert）
    const { data, error } = await supabase.storage
        .from("products-images")
        .upload(name, file, { upsert: true }); // 第一個參數是檔名，第二個是 File 物件 { upsert: true } 可複寫
    if (error) console.error("上傳失敗", error);
    else console.log("上傳成功", data);
    return { data, error };
};

// 對應 template 的上傳按鈕：呼叫上面的 uploadFile helper
export const upload = async (name, id) => {
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
export const listFiles = async (path = "") => {
    // 列出 Storage 中的檔案（供除錯或後台管理用）
    const { data, error } = await supabase.storage.from("products-images").list(path);
    if (error) {
        console.error("listFiles error", error);
        return { data: null, error };
    }
    return { data, error: null };
};

// 刷新圖庫列表（避免 refreshFiles 未定義導致錯誤）
export const refreshFiles = async () => {
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

export const deleteFile = async (fileName) => {
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


