<template>
    <div class="flex justify-center items-center">
        <!-- <h1>Product List</h1> -->
        <div class="flex gap-x-5 mb-[60px]">
            <router-link to="/product/women/all"
                class="inline-flex items-center gap-2 px-[40px] py-[20px] border-[1px] border-gray-300 rounded-full text-lg font-medium transition-colors duration-150"
                :class="$route.path.includes('/product/women') ? 'bg-green-600 text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-100'">
                女鞋
            </router-link>

            <router-link to="/product/men/all"
                class="inline-flex items-center gap-2 px-[40px] py-[20px] border-[1px] border-gray-300 rounded-full text-lg font-medium transition-colors duration-150"
                :class="$route.path.includes('/product/men') ? 'bg-green-600 text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-100'">
                男鞋
            </router-link>

        </div>
    </div>
</template>
