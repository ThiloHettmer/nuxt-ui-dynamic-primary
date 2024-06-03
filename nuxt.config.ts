// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://ui.nuxt.com/getting-started/installation
    '@nuxt/ui',
  ],

  tailwindcss: {
    configPath: './tailwind.config.ts',
  },

  devtools: { enabled: true }
})
