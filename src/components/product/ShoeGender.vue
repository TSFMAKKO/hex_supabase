<template>
    <div class="flex w-full px-5 mb-[24px]">
        <div class="w-[1296px] m-0 mx-auto text-[28px] font-[700] leading-[120%] tracking-[1.4px] text-[#212529]">

            <span v-if="sex === 'women'">女</span>
            <span v-else-if="sex === 'men'">男</span>
            鞋
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = computed(() => route.params.category || 'all')
const sex = computed(() => route.params.sex || 'women')
console.log('category:', category.value)
console.log('sex:', sex.value)
</script>