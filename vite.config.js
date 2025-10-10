import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/hex_supabase/',
    server: {
    host: '0.0.0.0', // ✅ 允許外部訪問
    port: 5173,
  },

})
