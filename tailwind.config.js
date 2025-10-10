import { defineConfig } from "tailwindcss";

export default defineConfig({
  theme: {
    extend: {
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
