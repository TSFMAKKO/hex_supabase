import { defineConfig } from "tailwindcss";

export default defineConfig({
  theme: {
    extend: {
      screens: {
        'max-xs': { max: '390px' }, // ✅ 自訂最大寬度斷點

      },
      fontFamily: {
        noto: ['"Noto Sans TC"', 'sans-serif'],
        mina: ['"Mina"', 'sans-serif'],

      },

      colors: {
        brand: "#1da1f2",
      },
    },
  },
  plugins: [],
});
