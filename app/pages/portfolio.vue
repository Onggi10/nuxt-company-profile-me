<script setup>
useSeoMeta({
  title: 'Portfolio Project Kami',
  description: 'Beberapa project website dan desain yang telah kami kerjakan.',
})
</script>

<template>
  <section class="py-24 max-w-7xl mx-auto px-6">
    <h1 class="text-4xl font-bold mb-12 text-center">Portfolio Kami</h1>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white rounded-xl shadow p-6">
        <img src="/portfolio1.jpg" class="rounded-lg mb-4" />
        <h3 class="font-semibold mb-2">Website UMKM</h3>
        <p class="text-sm text-gray-600">
          Company profile untuk bisnis kuliner.
        </p>
      </div>

      <div class="bg-white rounded-xl shadow p-6">
        <img src="/portfolio2.jpg" class="rounded-lg mb-4" />
        <h3 class="font-semibold mb-2">Website Undangan</h3>
        <p class="text-sm text-gray-600">
          Undangan online modern dan elegan.
        </p>
      </div>

      <div class="bg-white rounded-xl shadow p-6">
        <img src="/portfolio3.jpg" class="rounded-lg mb-4" />
        <h3 class="font-semibold mb-2">Desain Logo</h3>
        <p class="text-sm text-gray-600">
          Branding untuk personal brand.
        </p>
      </div>
    </div>
  </section>
</template>