<template>
    <!-- <h2>Collect</h2> -->
    <div class="grid gap-y-[32px] max-sm:gap-y-[24px] max-w-[636px] mx-auto mb-[64px]">
        <div class="font-[700] text-[28px] max-sm:text-[24px] leading-[1.2] tracking-[1.4px] max-sm:tracking-[1.2px] flex justify-center gap-x-[16px] ">
            <div class="flex justify-center items-center p-[8px] rounded-[50%] bg-[#C0FA73]">
                <img src="../assets/checked.svg" alt="">
            </div>
            <div>
                我的收藏
            </div>
        </div>
        <div class="flex items-center gap-x-[12px] bg-[#F5FEE7] text-[#57A203] p-[16px] rounded-[4px]">
            <img class="block py-[3px]" src="../assets/shopCar.svg" alt="">
            <div>
                門市營業時間：週一至週五 10:00 - 22:00
            </div>
        </div>
        <div class="flex flex-col gap-y-[32px]">
            <!-- <div class="flex gap-x-[16px]">
                <div>
                    <img src="https://picsum.photos/id/1011/120/120" alt="?">
                </div>
                <div class="flex flex-col gap-y-[8px] w-full">
                    <div class="font-[700] text-[20px] leading-[1.2] tracking-[1px]">PLATFORM 404</div>
                    <div><span class="mr-[12px] font-[400] text-[#6C757D]">尺寸</span><span>12</span></div>
                    <div><span class="mr-[12px] font-[400] text-[#6C757D]">顏色</span><span>Navy</span></div>
                    <div class="w-full text-right font-[700] leading-[1.2]">NT$2,600</div>
                </div>
            </div>   -->

            <div v-for="c in collects" :key="c.id" class="flex gap-x-[16px] border-b border-[#DEE2E6] pb-[32px] rounded-[4px]">
                <div>
                    <img :src="c.img" alt="?">
                </div>
                <div class="flex flex-col gap-y-[8px] w-full">
                    <div class="font-[700] text-[20px] leading-[1.2] tracking-[1px]">{{ c.name }}</div>
                    <div><span class="mr-[12px] font-[400] text-[#6C757D]">尺寸</span><span>{{ c.size }}</span></div>
                    <div><span class="mr-[12px] font-[400] text-[#6C757D]">顏色</span><span>{{ c.color }}</span></div>
                    <div class="w-full text-right font-[700] leading-[1.2]">NT${{ c.price }}</div>
                </div>
            </div>
        </div>



        <div class="flex justify-center">
            <router-link class="inline-block py-[12px] px-[24px] rounded-[4px] bg-[#212529] text-[#fff]"
                to="/productDetail/29">立即預約門市試穿</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

//  // https://raw.githubusercontent.com/TSFMAKKO/hex_supabase/refs/heads/main/src/assets/inspiration-10.png
   
const collects = ref([
    {
        id: 1,
        name: 'PLATFORM 404',
        size: '38',
        color: 'Navy',
        price: 2600,
        img: 'https://raw.githubusercontent.com/TSFMAKKO/hex_supabase/refs/heads/main/src/assets/product-10.png'
    },
    {
        id: 2,
        name: 'BOOMLOK',
        size: '38',
        color: 'White',
        price: 3200,
        img: 'https://raw.githubusercontent.com/TSFMAKKO/hex_supabase/refs/heads/main/src/assets/product-11.png'
    },
    {
        id: 3,
        name: 'MELTY KISS',
        size: '38',
        color: 'Violet',
        price: 4000,
        img: 'https://raw.githubusercontent.com/TSFMAKKO/hex_supabase/refs/heads/main/src/assets/product-10.png'
    },
])

onMounted(() => {
    document.title = '我的收藏 - URBNSTYLE'


});


</script>