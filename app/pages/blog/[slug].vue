<script setup>
const route = useRoute()

useSeoMeta({
  title: route.params.slug,
})
</script>

<template>
  <section class="py-24 max-w-3xl mx-auto px-6">
    <h1 class="text-3xl font-bold mb-6">
      {{ route.params.slug }}
    </h1>

    <p class="text-gray-600">
      Isi artikel di sini. Nanti bisa dikembangkan pakai CMS atau markdown.
    </p>
  </section>
</template>