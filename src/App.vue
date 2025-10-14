<template>
  <div id="app">
    <nav>
      <router-link to="/">Index</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/productDeteil/29">ProductDetail</router-link> |
      <router-link to="/story">Story</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/test">Test</router-link>
    </nav>

    <!-- <HeaderView /> -->
    <HeaderView />
    <main class="px-5">
      <router-view :key="$route.fullPath" />
    </main>
    <FooterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';


</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Mina&display=swap");

body {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 5%;
  color: #212529
}



nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>