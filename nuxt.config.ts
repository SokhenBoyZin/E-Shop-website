// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  devtools: { enabled: true },

  devServer: {
    port: 3001
  },
  
  vite: {
    plugins: [
      await import('@tailwindcss/vite').then((m) => m.default()),
    ],
  },

  modules: ['nuxt-swiper', '@pinia/nuxt', '@nuxt/image'],

  // Base runtime configuration
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://eshop-ecommerce-de31.onrender.com/api',
    }
  }

})