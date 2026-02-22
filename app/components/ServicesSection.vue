<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section id="services" class="bg-gray-50 py-20 text-center">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12">Layanan Kami</h2>

      <div class="grid md:grid-cols-4 gap-8">
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold mb-3">Web Development</h3>
          <p class="text-gray-600 text-sm mb-4">
            Website profesional untuk meningkatkan kredibilitas bisnis.
          </p>
          <a :href="waLink('Saya tertarik dengan Web Development')"
            target="_blank"
            class="text-green-600 font-medium">
            Tanya Sekarang →
          </a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold mb-3">Website Undangan</h3>
          <p class="text-gray-600 text-sm mb-4">
            Undangan digital modern dan elegan.
          </p>
          <a :href="waLink('Saya tertarik dengan Website Undangan')"
            target="_blank"
            class="text-green-600 font-medium">
            Tanya Sekarang →
          </a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold mb-3">Desain</h3>
          <p class="text-gray-600 text-sm mb-4">
            Logo dan kebutuhan branding bisnis.
          </p>
          <a :href="waLink('Saya tertarik dengan jasa Desain')"
            target="_blank"
            class="text-green-600 font-medium">
            Tanya Sekarang →
          </a>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold mb-3">Entry Data</h3>
          <p class="text-gray-600 text-sm mb-4">
            Input data cepat dan akurat.
          </p>
          <a :href="waLink('Saya tertarik dengan jasa Entry Data')"
            target="_blank"
            class="text-green-600 font-medium">
            Tanya Sekarang →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>