    <script setup>
const phoneNumber = '6289531310890'

const waLink =
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Halo, saya ingin mulai kerja sama.'
  )}`
</script>

<template>
  <section class="bg-green-600 py-20 text-center text-white">
    <h2 class="text-3xl font-bold mb-6">
      Siap Mengembangkan Bisnis Anda?
    </h2>

    <a
      :href="waLink"
      target="_blank"
      class="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold"
    >
      Chat Kami Sekarang
    </a>
  </section>
</template>