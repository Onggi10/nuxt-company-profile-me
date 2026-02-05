<script setup>
useHead({
  title: 'Tentang Kami | PT Contoh Perusahaan',
  meta: [
    {
      name: 'description',
      content:
        'Mengenal lebih dekat PT Contoh Perusahaan, visi, misi, dan nilai-nilai kami.',
    },
  ],
})
</script>

<template>
  <!-- Header -->
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800">
        Tentang Kami
      </h1>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Kami adalah perusahaan teknologi yang berfokus pada solusi
        digital untuk bisnis modern.
      </p>
    </div>
    <AboutSection/>
  </section>
</template>
