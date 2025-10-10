<template>
  <div id="app">
    <nav>
      <router-link to="/">Index</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/test">Test</router-link> 
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Mina&display=swap");

body {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 5%;
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