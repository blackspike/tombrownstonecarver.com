export default defineNuxtConfig({
  // Modules
  modules: ["nuxt-graphql-client", "nuxt-plausible"],

  // // plausible
  // plausible: {
  //   domain: "tombrownstonecarver.com",
  // },

  runtimeConfig: {
    public: {
      GQL_HOST: "https://cms.blackspike.com/tom-brown/graphql",
    },
  },

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
