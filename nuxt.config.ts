export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'PT Digital Sanjaya | Solusi Digital',
      meta: [
        {
          name: 'description',
          content:
            'PT Digital Sanjaya adalah perusahaan teknologi yang menyediakan jasa website, aplikasi, dan solusi digital.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
})
