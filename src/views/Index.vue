<template>
  <!-- <div class="flex">
    <h1 class="mx-auto">Index Page</h1>
  </div> -->

  <div class="benner w-[calc(100vw-15px)] -mx-5 overflow-hidden">
    <img class="w-full max-w-none  " src="../assets/banner.png" alt="">
  </div>

  <div class="grid gap-y-[32px] max-w-[1296px] w-[90%] mx-auto">
    <div>
      <div>New Arrival</div>
      <div>新品上市</div>
    </div>

    <div class=" grid grid-cols-2 grid-rows-2 gap-y-[40px] gap-x-[24px]">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  </div>

  <!-- 熱銷補貨 -->
  <div class="flex flex-col gap-y-[16px] max-w-[1296px] w-[90%] max-sm:w-[100%] mx-auto">
    <div class="font-[700] text-[32px] leading-[1.2] tracking-[1.6px]">熱銷補貨</div>

    <!-- 卷軸容器（桌面：grid；小螢幕：水平滑動） -->
    <div class="overflow-x-auto">
      <div
        class="grid grid-cols-4 gap-x-[24px] w-full max-sm:flex max-sm:gap-x-[16px]">
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0">
          <img class="w-full h-full object-cover" src="../assets/product-10.png" alt="">
        </div>
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0">
          <img class="w-full h-full object-cover" src="../assets/product-1.png" alt="">
        </div>
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0">
          <img class="w-full h-full object-cover" src="../assets/product-2.png" alt="">
        </div>
        <div class="max-sm:w-[300px] max-sm:h-[300px] max-sm:shrink-0">
          <img class="w-full h-full object-cover" src="../assets/product-3.png" alt="">
        </div>

      </div>
    </div>
  </div>

  <!--  -->
  <div class="w-[calc(100vw-15px)] -mx-5 overflow-hidden">
    <img class="w-full max-w-none  " src="../assets/banner-co-branded.png" alt="">
  </div>

    <!-- 依系列選購 -->
  <div class="flex flex-col gap-y-[16px] max-w-[1296px] w-[90%] max-sm:w-[100%] mx-auto">
    <div class="font-[700] text-[32px] leading-[1.2] tracking-[1.6px]">依系列選購</div>
    <!-- 卷軸容器（桌面：grid；小螢幕：水平滑動） -->
    <div class="overflow-x-auto">
      <div
        class="grid grid-cols-4 max-sm:grid-cols-2 gap-x-[24px] w-full max-sm:gap-x-[12px] max-sm:gap-y-[12px]">
        
        <div class="">
          <img class="w-full h-full object-cover" src="../assets/product-10.png" alt="">
        </div>
        <div class="">
          <img class="w-full h-full object-cover" src="../assets/product-1.png" alt="">
        </div>
        <div class="">
          <img class="w-full h-full object-cover" src="../assets/product-2.png" alt="">
        </div>
        <div class="">
          <img class="w-full h-full object-cover" src="../assets/product-3.png" alt="">
        </div>

      </div>
    </div>
  </div>

  <!-- 穿搭靈感 -->
  <div class="flex flex-col gap-y-[16px] max-w-[1296px] w-[90%] max-sm:w-[100%] mx-auto">
    <div class="font-[700] text-[32px] leading-[1.2] tracking-[1.6px]">穿搭靈感</div>

    <!-- 卷軸容器 -->
    <div class="overflow-x-auto">
      <!-- grid 寬度固定，讓內容可橫向滾動 -->
      <div
        class="grid grid-cols-6 gap-[8px] min-w-[1296px] max-sm:w-[calc((300px*12)+(16px*11))] max-sm:grid-cols-12 max-sm:gap-[16px]">
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
