// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,  
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', {autoImports: ['defineStore', 'acceptHMRUpdate']}],
    '@nuxt/image',
  ],
  app: {
    head: {
        //utf-8 for global use
        charset: "utf-8",
        //Setup device as desktop view
        viewport: "width=device-width, initial-scale=1",
    },
},
//properly state the provider avoid error.
image: {
    provider: 'netlify',
    netlify: {
        baseURl: process.env.IMAGES_URL
    },
  },
})

