<template>
    <h1>ProductDeteilView id:{{ id }}</h1>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
// console.log(route.params.id)  // '123'

const id = ref(route.params.id)
console.log("id:", route.params.id);

</script>