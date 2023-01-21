export default defineNuxtConfig({
  // CSS
  css: ["@/assets/css/main.scss"],

  vite: {
    // Hack til styleresources is working
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/abstracts/_mixins.scss";',
        },
      },
    },
  },
})
