<script setup>
useHead({
  title: 'Hubungi Kami | PT Contoh Perusahaan',
  meta: [
    {
      name: 'description',
      content:
        'Hubungi PT Contoh Perusahaan untuk konsultasi dan kerja sama bisnis.',
    },
  ],
})
</script>

<template>
  <!-- Header -->
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800">
        Hubungi Kami
      </h1>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Kami siap membantu kebutuhan digital Anda.
      </p>
    </div>
    <ContactSection/>
  </section>
</template>
