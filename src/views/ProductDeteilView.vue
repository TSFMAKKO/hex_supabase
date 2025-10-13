<template>
    <div class="flex">
        <h1 class="mx-auto">ProductDetailView id:{{ id }}</h1>
    </div>
    <div class="flex justify-center max-sm:flex-col w-full gap-x-[24px] py-5">
        <div class="w-[726px] max-sm:w-full">
            <ul class="grid grid-cols-2 gap-[8px] max-sm:hidden">
                <li class="p-[56px] bg-gray-400">
                    <img src="https://picsum.photos/257/257" />
                </li>
                <li class="p-[56px] bg-gray-400">
                    <img src="https://picsum.photos/257/257" />
                </li>
                <li class="p-[56px] bg-gray-400">
                    <img src="https://picsum.photos/257/257" />
                </li>
            </ul>

             <ul class="grid grid-cols-1 gap-[8px] sm:hidden w-full">
                <li class=" bg-gray-400 w-full">
                    <img class="w-full object-cover block" src="https://picsum.photos/500/500" />
                </li>
            </ul>
        </div>
        <div class="w-[526px] max-sm:w-full flex flex-col gap-y-[32px]">
            <section class="flex flex-col gap-y-[16px]">

                <div>
                    <div class="nav flex gap-x-[12px]">
                        <span class="text-[#6C757D]">
                            首頁
                        </span>
                        <span class="text-[#6C757D]">
                            /
                        </span>
                        <span class="text-[#6C757D]">
                            女鞋
                        </span>
                        <span class="text-[#6C757D]">
                            /
                        </span>
                        <span class="text-[#6C757D]">
                            滑板鞋
                        </span>
                        <span class="text-[#6C757D]">
                            /
                        </span>
                        <span class="text-[#212529]">
                            Platform 404
                        </span>

                    </div>
                    <div class="title font-[700] text-[32px] leading-[120%] text-[#212529]">
                        Platform 404
                    </div>
                </div>

                <div class="price flex gap-x-[8px]">
                    <div class="sale font-[700] text-[20px] leading-[120%] text-[#57A203]">NT$2,600 </div>
                    <div class="original font-[400] text-[14px] leading-[150%] text-[#ADB5BD]">
                        <del>
                            NT$3,200
                        </del>
                    </div>
                </div>

                <!-- 描述 -->
                <div class="">
                    <div class="">
                        Platform 404 以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。
                    </div>
                    <div class="">
                        鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。
                    </div>
                </div>

            </section class="flex flex-col gap-y-[48px]">
            <div class="flex flex-col gap-y-[32px]">
                <div class="flex flex-col gap-y-[8px]">
                    <div>顏色</div>
                    <div class="flex gap-x-[8px]">
                        <div>
                            <div>
                                <img src="https://picsum.photos/64/64" alt="">
                            </div>
                            <div class="text-[#6C757D]">藍色</div>
                        </div>

                        <div>
                            <div>
                                <img src="https://picsum.photos/64/64" alt="">
                            </div>
                            <div class="text-[#6C757D]">卡其色</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-[8px]">
                    <div>尺寸</div>
                    <div class="grid grid-cols-3 max-sm:grid-cols-2 gap-[8px]">
                        <div class="py-[12px] px-[24px] text-center border border-[#DEE2E6]">35(22.5cm)</div>
                        <div class="py-[12px] px-[24px] text-center border border-[#DEE2E6]">35(22.5cm)</div>
                        <div class="py-[12px] px-[24px] text-center border border-[#DEE2E6]">35(22.5cm)</div>
                        <div class="py-[12px] px-[24px] text-center border border-[#DEE2E6]">35(22.5cm)</div>
                        <div class="py-[12px] px-[24px] text-center border border-[#DEE2E6] text-[#DEE2E6]">35(22.5cm)
                        </div>

                    </div>
                    <div class="text-[#D74F4F] font-[400]">僅剩 3 雙</div>
                </div>
            </div>
            <div class="flex gap-x-[8px]">
                <div class="w-[255px] h-[48px] flex justify-center items-center text-[#212529] border border-[#212529]">
                    加入收藏</div>
                <div class="w-[255px] h-[48px] flex justify-center items-center bg-[#212529] text-[#ffffff]">門市預約試穿
                </div>
            </div>
            <section>
            </section>
            <section class="">
                <div class="flex flex-col gap-y-[4px] py-[12px]">
                    <div>商品材質</div>
                    <div>
                        <p class="font-[400] text-[#6C757D]">鞋面：合成皮革（Synthetic Leather）</p>
                        <p class="font-[400] text-[#6C757D]">內裡：透氣網布材質，提升舒適與排汗性</p>
                        <p class="font-[400] text-[#6C757D]">鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果</p>
                        <p class="font-[400] text-[#6C757D]">鞋帶：聚酯纖維，耐拉扯不易鬆脫</p>
                    </div>
                </div>

                <div class="flex flex-col gap-y-[4px] py-[12px]">
                    <div>購買須知</div>
                    <div>
                        <p class="font-[400] text-[#6C757D]">商品顏色因螢幕顯示可能略有差異，請以實品為準。</p>
                        <p class="font-[400] text-[#6C757D]">建議首次穿著前試穿確認尺寸，避免影響退換貨權益。</p>
                        <p class="font-[400] text-[#6C757D]">本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。</p>
                    </div>
                </div>

                <div class="flex flex-col gap-y-[4px] py-[12px]">
                    <div>保養方式</div>
                    <div>
                        <p class="font-[400] text-[#6C757D]">建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。</p>
                        <p class="font-[400] text-[#6C757D]">收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。</p>
                        <p class="font-[400] text-[#6C757D]">若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。</p>
                    </div>
                </div>
            </section>




        </div>

    </div>

    <!-- <div class="mx-auto w-[1296px] grid grid-cols-1 gap-y-[16px] mb-[88px]">
        <div class="font-[700] text-[24px] leading-[1.2]">你可能也喜歡</div>

        <div class="grid grid-cols-4 max-sm:grid-cols-1">
            <div class="grid gap-y-[12px]">
                <div><img src="https://picsum.photos/306/306" alt=""></div>
                <div class="grid grid-rows-1 gap-y-[4px]">
                    <div class="title font-[700] leading-[1.2]">商品標題</div>
                    <div class="price">NT$ 2,999</div>
                </div>
            </div>

            <div class="grid gap-y-[12px]">
                <div><img src="https://picsum.photos/306/306" alt=""></div>
                <div class="grid grid-rows-1 gap-y-[4px]">
                    <div class="title font-[700] leading-[1.2]">商品標題</div>
                    <div class="price">NT$ 2,999</div>
                </div>
            </div>

            <div class="grid gap-y-[12px]">
                <div><img src="https://picsum.photos/306/306" alt=""></div>
                <div class="grid grid-rows-1 gap-y-[4px]">
                    <div class="title font-[700] leading-[1.2]">商品標題</div>
                    <div class="price">NT$ 2,999</div>
                </div>
            </div>

            <div class="grid gap-y-[12px]">
                <div><img src="https://picsum.photos/306/306" alt=""></div>
                <div class="grid grid-rows-1 gap-y-[4px]">
                    <div class="title font-[700] leading-[1.2]">商品標題</div>
                    <div class="price">NT$ 2,999</div>
                </div>
            </div>

        </div>


    </div> -->
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
// console.log(route.params.id)  // '123'

const id = ref(route.params.id)
console.log("id:", route.params.id);

</script>