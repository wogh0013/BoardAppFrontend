// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  srcDir: ".",
  alias: {
    "@": ".",
  },
  //백엔드와 연동
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:8080", // 백엔드 주소
        changeOrigin: true,
      },
    },
  },
});
