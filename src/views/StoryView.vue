<template>
    <!-- <div class="flex mb-[60px]">
        <h1 class="mx-auto">品牌故事</h1>
    </div> -->
    <div
        class="benner h-[400px] relative w-[calc(100%+24px)] m-[-12px] overflow-hidden mb-[64px] max-sm:mb-[40px] max-sm:h-[375px]">
        <div class="grid gap-y-[16px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10 text-center">
            <div class="tw-headings-h1">品牌故事</div>
            <div class="tw-headings-h3">Brand Story</div>
        </div>
        <img src="../assets/hero-sm.png" alt=""
            class="absolute inset-0 w-full h-full object-cover object-center max-sm:object-bottom" />
    </div>

    <div class="py-[64] mx-auto flex flex-col items-center gap-y-[48px] max-w-[1296px] max-sm:w-full">

        <div class="grid gap-y-[12px]  text-center tw-headings-h5 bg-primary-100 p-[32px] max-w-[856px] w-[100%] max-sm:px-[24px] max-sm:text-left">
            <div class=" text-primary-400">走出城市的節奏，穿上自己的步調。</div>
            <div class="grid gap-y-[4px] tw-paragraph-md">
                <div>我們相信，每一雙鞋都該帶著個性出場。</div>
                <div>在 URBNSTEP，我們認為鞋履不只是穿戴飾品，更是你與世界連結的語言。</div>
                <div>融合城市結構與機能語彙，我們打造適合都會節奏的風格鞋款，陪你自信穿梭每一場風景。</div>
            </div>
        </div>

        <div class="max-w-[1076px] grid gap-y-[24px] text-center border-b border-neutral-300 pb-[48px]">
            <img src="../assets/story_shoe.png" alt="" srcset="">
            <div class="tw-headings-h4 text-left max-w-[856px] w-[100%] mx-auto">品牌簡介</div>
            <div class="grid gap-y-[24px] max-sm:gap-y-[16px] text-left max-w-[856px] w-[100%] mx-auto">
                <div class="text-primary-400 tw-headings-h5 max-sm:grid max-sm:gap-y-[8px]">
                    <span>URBNSTEP 是來自台灣的街頭機能鞋品牌，</span>
                    <span>致力於打造「風格與功能並存」的鞋履體驗。</span>
                </div>
                <div class="grid gap-y-[16px] max-sm:gap-[12px]">
                    <div class="grid max-sm:gap-y-[8px]">在城市與日常的交錯中，我們看見了步伐的力量。URBNSTEP
                        誕生於一群設計師與文化觀察者的交會點——一個相信風格應該來自「真實場景」而非伸展台的團隊。從都市的清晨街角，到午後光影灑落的人行道，我們捕捉的是那些不被刻意編排的時刻，那些用一雙鞋踏出的態度與節奏。每一款鞋的誕生，不只是設計與工藝的結晶，更是一段來自城市靈感的延伸，我們相信：鞋，是穿在腳上的語言。
                    </div>
                    <div>URBNSTEP 的名字來自 Urban +
                        Step，代表著我們對每一個走進城市生活的人致敬。我們不追逐潮流，我們關注輪廓、材質、穿著者的心境與身型，創造能陪伴你走進自我節奏的經典之作。選用高品質麂皮、織物與天然橡膠大底，並與獨立插畫家、攝影師合作，打造具有街頭詩意的形象風格。URBNSTEP
                        相信，美不是炫耀，而是由內而外的呼吸——一雙鞋，剛好說出你心中的樣子。</div>
                </div>
            </div>
        </div>

        <!--  -->
        <div class="grid gap-y-[24px] text-left max-w-[856px] w-[100%] pb-[48px] mx-auto">
            <div class="tw-headings-h4">品牌歷程</div>
            <ul class="grid gap-y-[12px] list-disc ml-[20px]">
                <li>2019 | URBNSTEP 在台北東區的創意工作室誕生。</li>
                <li>2021 | 首款【Urban Flow 系列】誕生，結合針織鞋面與城市靈感。</li>
                <li>2025 | URBNSTEP 已成為台灣街頭生活風格的代表鞋履品牌之一。</li>
            </ul>
        </div>

        <div class="grid gap-y-[24px] text-left max-w-[856px] w-[100%] pb-[48px] mx-auto">
            <div class="tw-headings-h4">品牌理念</div>
            <ul class="grid gap-y-[12px]">
                <li class="pl-[12px] border-l-[3px] border-neutral-300">機能先行：輕量、透氣、防潑水</li>
                <li class="pl-[12px] border-l-[3px] border-neutral-300">美學延伸：極簡線條 + 實驗配色</li>
                <li class="pl-[12px] border-l-[3px] border-neutral-300">永續材料：選用環保合成皮革與可回收包裝</li>
            </ul>
        </div>

        <div class="grid gap-y-[24px] text-left max-w-[856px] w-[100%] pb-[48px] mx-auto">
            <div class="tw-headings-h4">品牌小故事</div>
            <ul class="grid gap-y-[8px] text-primary-400">
                <li class=""><img class="inline-block mr-[8px]" src="../assets/arror.svg" alt="" srcset=""> 創辦人筆記：我們為什麼想做鞋？</li>
                <li class=""><img class="inline-block mr-[8px]" src="../assets/arror.svg" alt="" srcset=""> 穿上 URBNSTEP 的他們</li>
                <li class=""><img class="inline-block mr-[8px]" src="../assets/arror.svg" alt="" srcset=""> URBNSTEP 鞋履的誕生過程</li>
            </ul>
        </div>
    </div>
</template>