import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  image: {
    dir: 'assets/img',
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/image'],
})