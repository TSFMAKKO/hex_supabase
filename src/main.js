import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import './input.css'

createApp(App).use(router).mount('#app')


router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})
