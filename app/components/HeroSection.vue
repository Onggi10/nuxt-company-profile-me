<script setup>
useSeoMeta({
  title: 'Jasa Website & Digital Terjangkau',
  description: 'Solusi digital untuk UMKM dan personal brand.',
})

const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section class="bg-gray-50 py-24 text-center">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Solusi Digital Terjangkau untuk Mengembangkan Bisnis Anda
      </h1>

      <p class="text-gray-600 mb-8">
        Kami membantu UMKM, corporate, dan personal brand membangun website,
        desain profesional, serta layanan digital lainnya.
      </p>

      <a
        :href="waLink('Halo, saya ingin konsultasi mengenai layanan Anda.')"
        target="_blank"
        class="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Konsultasi Gratis
      </a>
    </div>
  </section>
</template>