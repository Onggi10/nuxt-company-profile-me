<script setup>
const phoneNumber = '6289531310890'

const waLink = (text) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
</script>

<template>
  <section id="pricing" class="py-20 text-center">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12">Paket Harga</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow">
          <h3 class="text-xl font-semibold mb-4">Starter</h3>
          <p class="text-3xl font-bold text-green-600 mb-6">1.5jt</p>
          <ul class="text-gray-600 text-sm space-y-2 mb-6">
            <li>3 Halaman</li>
            <li>Responsive</li>
            <li>Integrasi WhatsApp</li>
          </ul>
          <a :href="waLink('Saya ingin Paket Starter Website')"
            target="_blank"
            class="bg-green-600 text-white px-6 py-3 rounded-lg block">
            Pilih Paket
          </a>
        </div>

        <div class="bg-green-600 text-white p-8 rounded-xl shadow scale-105">
          <h3 class="text-xl font-semibold mb-4">Business</h3>
          <p class="text-3xl font-bold mb-6">3jt</p>
          <ul class="text-sm space-y-2 mb-6">
            <li>5 Halaman</li>
            <li>Custom Design</li>
            <li>SEO Basic</li>
          </ul>
          <a :href="waLink('Saya ingin Paket Business Website')"
            target="_blank"
            class="bg-white text-green-600 px-6 py-3 rounded-lg block font-semibold">
            Pilih Paket
          </a>
        </div>

        <div class="bg-white p-8 rounded-xl shadow">
          <h3 class="text-xl font-semibold mb-4">Undangan Online</h3>
          <p class="text-3xl font-bold text-green-600 mb-6">500rb</p>
          <ul class="text-gray-600 text-sm space-y-2 mb-6">
            <li>Desain Elegan</li>
            <li>Musik Background</li>
            <li>RSVP Form</li>
          </ul>
          <a :href="waLink('Saya ingin Website Undangan Online')"
            target="_blank"
            class="bg-green-600 text-white px-6 py-3 rounded-lg block">
            Pilih Paket
          </a>
        </div>
      </div>
    </div>
  </section>
</template>