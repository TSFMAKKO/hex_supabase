<template>
    <!-- <div class="flex">
        <h1 class="mx-auto">shoe type</h1>
    </div> -->
    <!-- <div class="flex w-[1296px] m-0 mx-auto gap-[24px]"> -->
    <div
        class="w-[196px] flex flex-col gap-y-[16px] max-sm:hidden leading-[150%] font-[500] text-[16px] tracking-[0.8px] text-[#212529]">
        <div class="h-[48px] w-[172px] flex items-center" :class="{ 'text-[#57A203]': category === 'all' }">
            <router-link to="/product/women/all">所有產品</router-link>
        </div>
        <div class="h-[48px] w-[172px] flex items-center" :class="{ 'text-[#57A203]': category === 'running' }">
            <router-link to="/product/women/running">慢跑鞋</router-link>
        </div>
        <div class="h-[48px] w-[172px] flex items-center" :class="{ 'text-[#57A203]': category === 'skateboarding' }">
            <router-link to="/product/women/skateboarding">滑板鞋</router-link>
        </div>
        <div class="h-[48px] w-[172px] flex items-center" :class="{ 'text-[#57A203]': category === 'loafers' }">
            <router-link to="/product/women/loafers">後底鞋</router-link>
        </div>
        <div class="h-[48px] w-[172px] flex items-center" :class="{ 'text-[#57A203]': category === 'limited' }">
            <router-link to="/product/women/limited">限定 / 聯名企劃</router-link>
            </ div>

        </div>
        <!-- </div> -->
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const category = computed(() => route.params.category || 'all')
const sex = computed(() => route.params.sex || 'women')
console.log('category:', category.value)
console.log('sex:', sex.value)


</script>