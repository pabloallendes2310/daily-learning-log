// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
  ],

  //SPA- Single page application
  // ssr: false,
  // nitro: {
  //   preset: "static",
  //   static: true,
  // },

  nitro: {
    prerender: {
      routes: ["/", "/about", "/pricing", "/contact", "/products"],
      ignore: ["/dashboard", "/dashboard/**"],
      crawlLinks: true,
    },
  },
});
