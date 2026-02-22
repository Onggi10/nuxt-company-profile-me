<script setup>
useSeoMeta({
  title: 'Blog Digital & Website',
  description: 'Artikel seputar website dan digital marketing.',
})

const posts = [
  {
    title: 'Kenapa UMKM Butuh Website?',
    slug: 'kenapa-umkm-butuh-website',
  },
  {
    title: 'Tips Memilih Jasa Web Development',
    slug: 'tips-memilih-jasa-web',
  },
]
</script>

<template>
  <section class="py-24 max-w-5xl mx-auto px-6">
    <h1 class="text-4xl font-bold mb-10">Blog</h1>

    <div class="space-y-6">
      <div v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`"
          class="text-xl font-semibold text-green-600">
          {{ post.title }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>