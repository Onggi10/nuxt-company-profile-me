<script setup>
useSeoMeta({
  title: 'Jasa Web Development Terjangkau',
  description: 'Jasa pembuatan website profesional untuk UMKM dan perusahaan dengan harga terjangkau.',
  ogTitle: 'Jasa Web Development Terjangkau',
  ogDescription: 'Website modern dan responsive untuk bisnis Anda.',
})

const phoneNumber = '6289531310890'
const waLink = `https://wa.me/${phoneNumber}?text=Halo, saya ingin jasa Web Development`
</script>

<template>
  <section class="py-24 max-w-5xl mx-auto px-6">
    <h1 class="text-4xl font-bold mb-6">Jasa Web Development</h1>

    <p class="text-gray-600 mb-8">
      Kami membantu UMKM dan perusahaan memiliki website profesional,
      responsive, dan SEO friendly.
    </p>

    <ul class="space-y-3 mb-10">
      <li>✅ Company Profile</li>
      <li>✅ Landing Page</li>
      <li>✅ Integrasi WhatsApp</li>
      <li>✅ Optimasi SEO Basic</li>
    </ul>

    <a
      :href="waLink"
      target="_blank"
      class="bg-green-600 text-white px-8 py-4 rounded-lg"
    >
      Konsultasi Sekarang
    </a>
  </section>
</template>