<template>
  <!-- <div class="flex">
    <h1 class="mx-auto">Index Page</h1>
  </div> -->

  <div class="hidden max-sm:flex  w-[calc(100%+24px)] m-[-12px]">
    <div class="h-[48px] w-[50%] text-[#212529] bg-[#E8FEC5] flex justify-center items-center">
      <router-link to="/product">
        商品列表
      </router-link>
    </div>
    <div class="h-[48px] w-[50%] text-[#212529] bg-[#F5FEE7] flex justify-center items-center">
      <router-link to="/story">
        品牌故事
      </router-link>
    </div>
  </div>

  <!-- 桌機 -->
  <div class="benner relative max-sm:hidden  w-[calc(100%+24px)] m-[-12px] overflow-hidden mb-[64px] max-sm:mb-[40px]">
    <img class="w-full max-w-none  " src="../assets/banner.png" alt="">
    <div class="absolute top-[50%] left-[200px] transform -translate-y-1/2 flex flex-col gap-y-[48px]">
      <div class=" text-[#fff] grid gap-y-[16px]">
        <div class="display-1">URBNSTEP</div>
        <div class="tw-headings-h3">Your Step, Your Statement</div>
      </div>
      <a href=""
        class="py-[12px] px-[24px] bg-primary-300 inline-flex justify-center text-neutral-900 w-[120px]">立即選購</a>
    </div>
  </div>

  <!-- 手機 -->
  <div class="benner relative sm:hidden  w-[calc(100%+24px)] m-[-12px] overflow-hidden mb-[64px] max-sm:mb-[40px]">
    <img class="w-full max-w-none  " src="../assets/banner-sm.png" alt="">
    <div class="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-[48px]">
      <div class=" text-[#fff] grid gap-y-[16px]">
        <div class="display-1">URBNSTEP</div>
        <div class="tw-headings-h3">Your Step, Your Statement</div>
      </div>
      <a href=""
        class="py-[12px] px-[24px] bg-primary-300 inline-flex justify-center text-neutral-900 w-[120px]">立即選購</a>
    </div>
  </div>

  <div class="grid gap-y-[32px] max-w-[1296px] w-[90%] mx-auto py-[64px] max-sm:py-[40px]">
    <div>
      <div class="font-[700] text-[48px] leading-[1.2] tracking-[2.4px] text-center">New Arrival</div>
      <div class="font-[700] text-[32px] leading-[1.2] tracking-[1.6px] text-center">新品上市</div>
    </div>

    <div class=" grid grid-cols-2 grid-rows-2 gap-y-[40px] gap-x-[24px]">
      <div class="grid gap-y-[12px]">
        <div><img src="../assets/new-1.png" alt="" srcset=""></div>
        <div class="grid gap-y-[4px]">
          <div class="font-[700] text-[20px] leading-[1.2] tracking-[1px]">Monoverse</div>
          <div class="">NT$3,600</div>
        </div>
      </div>

      <div class="grid gap-y-[12px]">
        <div><img src="../assets/new-2.png" alt="" srcset=""></div>
        <div class="grid gap-y-[4px]">
          <div class="font-[700] text-[20px] leading-[1.2] tracking-[1px]">PLATFORM 404</div>
          <div class="">NT$2,600</div>
        </div>
      </div>

      <div class="grid gap-y-[12px]">
        <div><img src="../assets/new-3.png" alt="" srcset=""></div>
        <div class="grid gap-y-[4px]">
          <div class="font-[700] text-[20px] leading-[1.2] tracking-[1px]">URBN Force</div>
          <div class="">NT$3,200</div>
        </div>
      </div>

      <div class="grid gap-y-[12px]">
        <div><img src="../assets/new-4.png" alt="" srcset=""></div>
        <div class="grid gap-y-[4px]">
          <div class="font-[700] text-[20px] leading-[1.2] tracking-[1px]">Mode90</div>
          <div class="">NT$4,000</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 熱銷補貨 -->
  <div class="flex flex-col gap-y-[16px] max-w-[1296px] w-[90%] max-sm:w-[100%] mx-auto py-[64px] max-sm:py-[40px]">
    <div class="font-[700] text-[32px] leading-[1.2] tracking-[1.6px]">熱銷補貨</div>

    <!-- 卷軸容器（桌面：grid；小螢幕：水平滑動） -->
    <div class="overflow-x-auto">
      <div class="grid grid-cols-4 gap-x-[24px] w-full max-sm:flex max-sm:gap-x-[16px]">
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0 relative">
          <p class="absolute top-0 left-0 tw-label-sm bg-primary-400">人氣 No.1</p>
          <img class="w-full h-full object-cover" src="../assets/product-10.png" alt="">
        </div>
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0 relative">
          <p class="absolute top-0 left-0 tw-label-sm bg-primary-400">人氣 No.1</p>
          <img class="w-full h-full object-cover" src="../assets/product-1.png" alt="">
        </div>
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0 relative">
          <p class="absolute top-0 left-0 tw-label-sm bg-primary-400">人氣 No.1</p>
          <img class="w-full h-full object-cover" src="../assets/product-2.png" alt="">
        </div>
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0 relative">
          <p class="absolute top-0 left-0 tw-label-sm bg-primary-400">人氣 No.1</p>
          <img class="w-full h-full object-cover" src="../assets/product-3.png" alt="">
        </div>

      </div>
    </div>
  </div>

  <!-- 下方benner -->
  <!-- <div class="relative  w-[calc(100%+24px)] m-[-12px] overflow-hidden max-sm:hidden  py-[64px] max-sm:py-[40px]">
    <img class="w-full max-w-none  " src="../assets/banner-co-branded.png" alt="">
    <div class="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-[48px]">
      <div class=" text-[#fff] grid gap-y-[32px]">
        <div class="grid gap-y-[16px]">
          <div class="display-2 max-xl:tw-headings-h2">URBNSTEP x Kevin Chen</div>
          <div class="tw-headings-h2 max-xl:tw-headings-h6">跨界聯名，限量發售</div>
        </div>
        <div class="tw-paragraph-lg">新銳漫畫家 Kevin Chen 親自操刀設計，街頭能量全面引爆！</div>
      </div>
      <div class="py-[12px] px-[24px] bg-primary-300 inline-block text-neutral-900 w-[115px]">立即選購</div>
    </div>

  </div> -->

  <!-- 桌 -->
  <div class="relative  w-[calc(100%+24px)] m-[-12px] overflow-hidden max-sm:hidden py-[64px] max-sm:py-[40px]">
    <img class="w-full max-w-none" src="../assets/banner-co-branded.png" alt="">
    <div
      class="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 flex flex-col gap-y-[clamp(20px,3vw,40px)] max-w-[1200px]">
      <div class="text-[#fff] grid gap-y-[clamp(6px,1vw,12px)]">
        <div class="grid gap-y-[clamp(3px,0.5vw,6px)]">
          <div class="text-[clamp(1.5rem,3.5vw,3rem)] font-bold leading-tight">URBNSTEP
            <span class="max-sm:text-center text-primary-300 inline-flex items-center relative bottom-[4px]">
              x
            </span>
            Kevin Chen
          </div>
          <div class="text-[clamp(1rem,2vw,1.5rem)] font-semibold">跨界聯名，限量發售</div>
        </div>
        <div class="text-[clamp(0.875rem,1.2vw,1.125rem)] leading-relaxed">新銳漫畫家 Kevin Chen 親自操刀設計，街頭能量全面引爆！</div>
      </div>
      <div
        class="py-[12px] px-[24px] bg-primary-300 inline-block text-neutral-900 w-fit cursor-pointer hover:opacity-90 transition-opacity">
        立即選購
      </div>
    </div>
  </div>

  <!-- 手機 -->
  <div class="relative w-[calc(100%+24px)] m-[-12px] overflow-hidden py-[48px] max-sm:py-[24px] sm:hidden">
    <img class="w-full max-w-none  " src="../assets/banner-co-branded-sm.png" alt="">
    <div
      class="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-y-[48px] max-sm:gap-y-[12px]">
      <div class=" text-[#fff] grid gap-y-[16px] max-sm:gap-y-[4px]">
        <div class="grid gap-y-[16px] max-sm:gap-y-[4px] text-center">
          <div class="tw-headings-h2">URBNSTEP</div>
          <div class="tw-headings-h2 max-sm:text-center text-primary-300">x</div>
          <div class="tw-headings-h2">Kevin Chen</div>
          <div class="tw-headings-h5 w-[160%]">跨界聯名，限量發售</div>
        </div>

      </div>
      <div class="tw-paragraph-md text-neutral-500 text-center w-[180%]">
        <p>新銳漫畫家 Kevin Chen 親自操刀設計</p>
        <p>街頭能量全面引爆！</p>
      </div>
      <a href=""
        class="py-[12px] px-[24px] bg-primary-300 inline-flex justify-center w-[120px] text-neutral-900">立即選購</a>
    </div>

  </div>

  <!-- 依系列選購 -->
  <div class="flex flex-col gap-y-[16px] max-w-[1296px] w-[90%] max-sm:w-[100%] mx-auto py-[64px] max-sm:py-[40px]">
    <a href="" class="font-[700] text-[32px] leading-[1.2] tracking-[1.6px]">依系列選購</a>
    <!-- 卷軸容器（桌面：grid；小螢幕：水平滑動） -->
    <div class="max-sm:overflow-x-auto">
      <div class="grid grid-cols-4 max-sm:grid-cols-2 gap-x-[24px] w-full max-sm:gap-x-[12px] max-sm:gap-y-[12px]">

        <!--  -->
        <div class="relative group w-full h-full overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/product-1.png" alt="">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-1/2 
              text-center opacity-0 group-hover:opacity-100
              transition-all duration-300">
            <div class="tw-headings-h3 font-[700] text-white w-[220px]">URBN RUNNER</div>
            <div class="tw-headings-h4 font-[700] text-white">慢跑系列</div>
          </div>
        </div>

        <div class="relative group w-full h-full overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/product-10.png" alt="">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-1/2 
              text-center opacity-0 group-hover:opacity-100
              transition-all duration-300">
            <div class="tw-headings-h3 font-[700] text-white w-[220px]">STREETMODE</div>
            <div class="tw-headings-h4 font-[700] text-white">滑板系列</div>
          </div>
        </div>

        <div class="relative group w-full h-full overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/product-3.png" alt="">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-1/2 
              text-center opacity-0 group-hover:opacity-100
              transition-all duration-300">
            <div class="tw-headings-h3 font-[700] text-white min-w-[220px]">CHUNK DISTRICT</div>
            <div class="tw-headings-h4 font-[700] text-white">厚底系列</div>
          </div>
        </div>

        <div class="relative group w-full h-full overflow-hidden">
          <img class="w-full h-full object-cover" src="../assets/product-4.png" alt="">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-1/2 
              text-center opacity-0 group-hover:opacity-100
              transition-all duration-300">
            <div class="tw-headings-h3 font-[700] text-white w-[220px]">COLLAB ZONE</div>
            <div class="tw-headings-h4 font-[700] text-white">聯名企劃</div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- 穿搭靈感 -->
  <div class="flex flex-col gap-y-[16px] max-w-[1296px] w-[90%] max-sm:w-[100%] mx-auto py-[64px] max-sm:py-[40px]">
    <div class="font-[700] text-[32px] leading-[1.2] tracking-[1.6px]">穿搭靈感</div>

    <!-- 卷軸容器 -->
    <div class="overflow-x-auto">
      <!-- grid 寬度固定，讓內容可橫向滾動 -->
      <div
        class="grid grid-cols-6 gap-[8px] max-w-[1296px] w-full max-sm:min-w-[calc((300px*12)+(16px*11))] max-sm:grid-cols-12 max-sm:gap-[16px]">
        <div class=""><img class="w-full" src="../assets/inspiration-1.png" alt=""></div>
        <div class=""><img class="w-full" src="../assets/inspiration-2.png" alt=""></div>
        <div><img class="w-full" src="../assets/inspiration-3.png" alt=""></div>
        <div><img class="w-full" src="../assets/inspiration-4.png" alt=""></div>

        <!-- 跨欄跨列圖片 -->
        <div class="col-span-2 row-span-2 max-sm:col-span-1 max-sm:row-span-1">
          <img class="w-full h-full object-cover" src="../assets/inspiration-5.png" alt="">
        </div>
        <div class="col-span-2 row-span-2 max-sm:col-span-1 max-sm:row-span-1">
          <img class="w-full h-full object-cover" src="../assets/inspiration-6.png" alt="">
        </div>

        <div><img class="w-full" src="../assets/inspiration-7.png" alt=""></div>
        <div><img class="w-full" src="../assets/inspiration-8.png" alt=""></div>
        <div><img class="w-full" src="../assets/inspiration-9.png" alt=""></div>
        <div><img class="w-full" src="../assets/inspiration-10.png" alt=""></div>
        <div><img class="w-full" src="../assets/inspiration-11.png" alt=""></div>
        <div><img class="w-full" src="../assets/inspiration-12.png" alt=""></div>
      </div>
    </div>
  </div>
</template>
