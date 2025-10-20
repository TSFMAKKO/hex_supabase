<template>
  <div class="flex">
    <h1 class="mx-auto">ProductDetailView id:{{ id }}</h1>
  </div>
  <div class="flex justify-center max-md:flex-col w-full gap-x-[24px]">
    <div class="max-w-[746px] max-md:w-full mb-[24px]">
      <!-- 桌機版 -->
      <ul class="grid grid-cols-2 gap-[8px] max-md:hidden">
        <template v-for="img in productDetail.img[productIndex]">
          <li class="bg-gray-400">
            <img :src="`${img}`" :key="img" />
          </li>
        </template>
      </ul>

      <!-- 手機板 -->
      <ul class="grid grid-cols-1 gap-[8px] md:hidden w-full">
        <li class="bg-gray-400 w-full">
          <img
            class="w-full object-cover block"
            :src="productDetail.img[productIndex][0]"
          />
        </li>
      </ul>
    </div>
    <div class="max-w-[526px] max-md:w-full flex flex-col gap-y-[32px]">
      <!-- 麵包屑、標題、價格、描述 -->
      <section class="flex flex-col gap-y-[16px]">
        <div>
          <div class="nav flex gap-x-[12px]">
            <span class="text-[#6C757D]"> 首頁 </span>
            <span class="text-[#6C757D]"> / </span>
            <span class="text-[#6C757D]"> 女鞋 </span>
            <span class="text-[#6C757D]"> / </span>
            <span class="text-[#6C757D]"> 滑板鞋 </span>
            <span class="text-[#6C757D]"> / </span>
            <span class="text-[#212529]"> Platform 404 </span>
          </div>
          <div class="title font-[700] text-[32px] leading-[120%] text-[#212529]">
            Platform 404
          </div>
        </div>

        <!-- 價格 -->
        <div class="price flex gap-x-[8px]">
          <div class="sale font-[700] text-[20px] leading-[120%] text-[#57A203]">
            NT$2,600
          </div>
          <div class="original font-[400] text-[14px] leading-[150%] text-[#ADB5BD]">
            <del> NT$3,200 </del>
          </div>
        </div>

        <!-- 描述 -->
        <div class="flex flex-col gap-y-[12px]">
          <div class="">
            Platform 404
            以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。
          </div>
          <div class="">
            鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。
          </div>
        </div>
      </section>

      <!-- 選擇顏色、尺寸  -->
      <section class="flex flex-col gap-y-[48px]">
        <div class="flex flex-col gap-y-[32px]">
          <div class="flex flex-col gap-y-[8px]">
            <div>顏色</div>
            <div class="flex gap-x-[8px]">
              <div
                v-for="(c, i) in productDetail.colors"
                :key="i"
                class="flex flex-col items-center"
              >
                <div
                  @click="selectColor(i)"
                  :class="[
                    'w-[64px] h-[64px] flex items-center justify-center',
                    i === productIndex
                      ? 'border-1 border-[#6C757D]'
                      : 'border border-transparent',
                    'cursor-pointer',
                  ]"
                >
                  <!-- /hex_supabase/src/assets/product-10.png -->
                  <img
                    class="w-[64px]"
                    :src="`${productDetail.colorProduct[i]}`"
                    alt=""
                  />
                </div>
                <div class="text-[#6C757D] mt-2">{{ c }}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-y-[8px]">
            <div>尺寸</div>
            <div class="grid grid-cols-3 max-md:grid-cols-2 gap-[8px]">
              <template v-for="(product, i) in productDetail.products">
                <template v-for="(p, j) in product">
                  <template v-if="i === productIndex">
                    <div
                      :class="[
                        'py-[12px] px-[24px] text-center border',
                        sizeIndex[0] === i && sizeIndex[1] === j
                          ? 'border border-[#212529]'
                          : 'border-[#DEE2E6]',
                        p.in_stock
                          ? 'text-[#212529] cursor-pointer'
                          : 'text-[#DEE2E6] cursor-not-allowed',
                      ]"
                      @click="selectSize(i, j, p.in_stock, p.stock)"
                    >
                      {{ p.size }}
                    </div>
                  </template>
                </template>
              </template>
            </div>
            <div class="text-[#D74F4F] font-[400]">僅剩 {{ sizeStock }} 雙</div>
          </div>
        </div>
        <div class="flex gap-x-[8px]">
          <!-- 切換最愛 -->
          <div
            @click="toggleFav()"
            class="w-[255px] h-[48px] flex justify-center items-center gap-x-[8px] text-[#212529] border border-[#212529] hover:bg-[#212529] hover:text-[#ffffff] transition"
          >
            <div>
              <!-- 用v-show控制fav -->
              <img v-show="productDetail.fav === false" src="../assets/fav.svg" alt="" />
              <img v-show="productDetail.fav === true" src="../assets/fav2.svg" alt="" />
            </div>
            <div class="">加入收藏</div>
          </div>

          <!-- 試穿 -->
          <div
            class="w-[255px] h-[48px] flex justify-center items-center gap-x-[8px] bg-[#212529] text-[#ffffff]"
          >
            <div>
              <img src="../assets/bag.svg" alt="" />
            </div>
            <div>門市預約試穿</div>
          </div>
        </div>
      </section>
      <section class="">
        <div class="flex flex-col gap-y-[4px] py-[12px]">
          <div>商品材質</div>
          <div>
            <p class="font-[400] text-[#6C757D]">鞋面：合成皮革（Synthetic Leather）</p>
            <p class="font-[400] text-[#6C757D]">內裡：透氣網布材質，提升舒適與排汗性</p>
            <p class="font-[400] text-[#6C757D]">
              鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果
            </p>
            <p class="font-[400] text-[#6C757D]">鞋帶：聚酯纖維，耐拉扯不易鬆脫</p>
          </div>
        </div>

        <div class="flex flex-col gap-y-[4px] py-[12px]">
          <div>購買須知</div>
          <div>
            <p class="font-[400] text-[#6C757D]">
              商品顏色因螢幕顯示可能略有差異，請以實品為準。
            </p>
            <p class="font-[400] text-[#6C757D]">
              建議首次穿著前試穿確認尺寸，避免影響退換貨權益。
            </p>
            <p class="font-[400] text-[#6C757D]">
              本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-y-[4px] py-[12px]">
          <div>保養方式</div>
          <div>
            <p class="font-[400] text-[#6C757D]">
              建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。
            </p>
            <p class="font-[400] text-[#6C757D]">
              收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。
            </p>
            <p class="font-[400] text-[#6C757D]">
              若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- <SaleSingup /> -->

  <!-- 你可能也喜歡 -->
  <div class="mx-auto max-w-[1296px] w-full grid grid-cols-1 gap-y-[16px] mb-[88px]">
    <div class="font-[700] text-[24px] leading-[1.2]">你可能也喜歡...</div>
    <!-- 商品列表 -->
    <div class="w-full max-sm:max-w-[100%] overflow-hidden">
      <!-- 讓小螢幕改為水平滑動的容器，避免撐破 body 寬度 -->
      <div
        class="w-full grid grid-cols-4 max-sm:flex max-sm:overflow-x-auto gap-x-[24px] max-sm:gap-x-[16px]"
      >
        <div class="grid gap-y-[12px] max-sm:min-w-[300px]">
          <div><img src="../assets/product-10.png" alt="" /></div>
          <div class="grid grid-rows-1 gap-y-[4px]">
            <div class="title font-[700] leading-[1.2]">VM001</div>
            <div class="price">NT$2,600</div>
          </div>
        </div>

        <div class="grid gap-y-[12px] max-sm:min-w-[300px]">
          <div><img src="../assets/product-11.png" alt="" /></div>
          <div class="grid grid-rows-1 gap-y-[4px]">
            <div class="title font-[700] leading-[1.2]">Melty Kiss</div>
            <div class="price">NT$4,000</div>
          </div>
        </div>

        <div class="grid gap-y-[12px] max-sm:min-w-[300px]">
          <div><img src="../assets/product-10.png" alt="" /></div>
          <div class="grid grid-rows-1 gap-y-[4px]">
            <div class="title font-[700] leading-[1.2]">BOOMBLOK</div>
            <div class="price">NT$3,200</div>
          </div>
        </div>

        <div class="grid gap-y-[12px] max-sm:min-w-[300px]">
          <div><img src="../assets/product-10.png" alt="" /></div>
          <div class="grid grid-rows-1 gap-y-[4px]">
            <div class="title font-[700] leading-[1.2]">Sugar Snap</div>
            <div class="price">NT$3,200</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// import SaleSingup from '../components/SaleSingup.vue';
const route = useRoute();

const id = ref(route.params.id);
console.log("id:", route.params.id);

const productIndex = ref(0);
const sizeIndex = ref([0, 0]);
const sizeStock = ref(3);
// 使用者點選尺寸
const selectSize = (colorIdx, sizeIdx, inStock, stock) => {
  if (!inStock) return;
  sizeIndex.value = [colorIdx, sizeIdx];
  sizeStock.value = stock;
};

const selectColor = (idx) => {
  productIndex.value = idx;
  // 預選該顏色第一個有庫存的尺寸 { size: "35(22.5)", in_stock: true, stock: 3 },
  const sizes = productDetail.value.products[idx] || {};

  // 選出第一個有庫存的size
  const j = sizes.findIndex((s) => s.in_stock);
  console.log("j:", j);
  sizeIndex.value = j >= 0 ? [idx, j] : [idx, 0];
};

const toggleFav = () => {
  productDetail.value.fav = !productDetail.value.fav;
};
// 打api 回傳
const productDetail = ref({
  title: "Platform 404",
  money: { sale: 2600, original_price: 3200 },
  fav: true,
  des: [
    "Platform 404 以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。",
    "鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。",
  ],
  // https://raw.githubusercontent.com/TSFMAKKO/hex_supabase/refs/heads/main/src/assets/inspiration-10.png
  // `${new URL('../assets/product-10.png', import.meta.url).href}`,
  img: [
    [
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
      `${new URL("../assets/product-10.png", import.meta.url).href}`,
    ],
    [
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
      `${new URL("../assets/product-11.png", import.meta.url).href}`,
    ],
  ],
  colors: ["藍色", "卡其色"],
  colorProduct: [
    `${new URL("../assets/product-10.png", import.meta.url).href}`,
    `${new URL("../assets/product-11.png", import.meta.url).href}`,
  ],
  products: [
    [
      { size: "35(22.5)", in_stock: true, stock: 3 },
      { size: "36(23)", in_stock: true, stock: 5 },
      { size: "37(23.5)", in_stock: true, stock: 2 },
      { size: "38(24)", in_stock: false, stock: 0 },
      { size: "39(24.5)", in_stock: true, stock: 4 },
      { size: "40(25)", in_stock: true, stock: 6 },
      { size: "41(25.5)", in_stock: false, stock: 0 },
      { size: "42(26)", in_stock: true, stock: 1 },
      { size: "43(26.5)", in_stock: true, stock: 3 },
    ],
    [
      { size: "35(22.5)", in_stock: false, stock: 0 },
      { size: "36(23)", in_stock: false, stock: 0 },
      { size: "37(23.5)", in_stock: true, stock: 5 },
      { size: "38(24)", in_stock: true, stock: 4 },
      { size: "39(24.5)", in_stock: false, stock: 0 },
      { size: "40(25)", in_stock: true, stock: 3 },
      { size: "41(25.5)", in_stock: true, stock: 2 },
      { size: "42(26)", in_stock: false, stock: 0 },
      { size: "43(26.5)", in_stock: true, stock: 6 },
    ],
  ],
});

// 初始化：預選當前 color 的第一個有庫存尺寸
onMounted(() => {
  const colors = productDetail.value.products || [];
  const ci = productIndex.value;
  if (colors[ci] && colors[ci].length) {
    const j = colors[ci].findIndex((s) => s.in_stock);
    if (j >= 0) sizeIndex.value = [ci, j];
  }
});
</script>
