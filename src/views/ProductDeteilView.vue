<template>
    <div class="flex">
        <h1 class="mx-auto">ProductDetailView id:{{ id }}</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
// console.log(route.params.id)  // '123'

const id = ref(route.params.id)
console.log("id:", route.params.id);

</script>