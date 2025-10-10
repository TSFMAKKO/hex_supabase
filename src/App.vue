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