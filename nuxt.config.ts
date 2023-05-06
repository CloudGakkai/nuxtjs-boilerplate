// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "nuxt-proxy",
    "@nuxtjs/google-fonts",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
  ],
  typescript: {
    strict: true,
  },
  googleFonts: {
    preconnect: true,
    preload: true,
    families: {
      Roboto: {
        wght: [400, 500, 700],
      },
    },
  },
  runtimeConfig: {
    proxy: {
      options: [
        {
          target: process.env.NUXT_PUBLIC_BASE_API_URL,
          changeOrigin: true,
          pathRewrite: {
            "^/api": "/",
          },
          pathFilter: ["/api"],
        },
      ],
    },
  },
});
