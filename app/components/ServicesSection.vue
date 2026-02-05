<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
          Layanan Kami
        </h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan digital untuk membantu
          bisnis Anda tumbuh lebih cepat.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all"
        >
          <div
            class="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-6 text-2xl"
          >
            {{ service.icon }}
          </div>

          <h3 class="text-xl font-semibold mb-3">
            {{ service.title }}
          </h3>

          <p class="text-gray-600 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'Pembuatan website profesional, cepat, dan SEO-friendly sesuai kebutuhan bisnis Anda.',
  },
  {
    icon: '📱',
    title: 'Mobile App',
    description:
      'Pengembangan aplikasi Android & iOS dengan performa tinggi dan desain modern.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Desain antarmuka yang intuitif dan menarik untuk meningkatkan pengalaman pengguna.',
  },
]
</script>
