export default defineNuxtConfig({
  // Head
  app: {
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      title: "Tom Brown | Award Winning master stone carver, sculptor, artist.",
      htmlAttrs: {
        lang: "en",
      },

      bodyAttrs: {
        id: "top",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { hid: "author", name: "author", content: "blackspike.com" },
        {
          hid: "description",
          name: "description",
          content:
            "Sculpture, restoration, memorials & tuition. Member of the Master Carvers Association. Director at London Stone Carving Ltd",
          key: "desc",
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Tom Brown | Award Winning master stone carver, sculptor, artist.",
          key: "ogtitle",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Sculpture, restoration, memorials & tuition. Member of the Master Carvers Association. Director at London Stone Carving Ltd",
          key: "ogdesc",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content:
            "Sculpture, restoration, memorials & tuition. Member of the Master Carvers Association. Director at London Stone Carving Ltd",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://tombrownstonecarver.com/",
          key: "ogurl",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "/1200x630.jpg",
          key: "ogimage",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/1200x630.jpg",
          key: "twimage",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        { rel: "manifest", href: "/manifest.json" },
        { rel: "icon", href: "/favicon.svg" },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "Tom Brown | Award Winning master stone carver, sculptor, artist.",
            image: "/1200x630.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "London",
              addressCountry: "GB",
              url: "https://www.brighton.dog",
            },
          }),
        },
      ],
    },
  },

  // Modules
  modules: ["nuxt-graphql-client", "nuxt-plausible"],

  // // plausible
  // plausible: {
  //   domain: "tombrownstonecarver.com",
  // },

  // GraphQL
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
