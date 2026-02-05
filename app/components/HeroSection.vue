<template>
  <section class="bg-gradient-to-r from-blue-600 to-indigo-600">
    <div
      class="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- TEXT -->
      <div class="text-white">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          Solusi Digital<br />
          Untuk Bisnis Modern
        </h1>

        <p class="mt-6 text-lg text-blue-100 max-w-xl">
          Kami membantu perusahaan berkembang melalui website,
          aplikasi, dan sistem digital yang handal.
        </p>

        <div class="mt-8 flex gap-4">
          <NuxtLink
            to="/contact"
            class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
          >
            Hubungi Kami
          </NuxtLink>

          <NuxtLink
            to="/services"
            class="border border-white/70 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Layanan Kami
          </NuxtLink>
        </div>
      </div>

      <!-- IMAGE -->
      <div class="hidden md:flex justify-center">
        <img
          src="https://illustrations.popsy.co/blue/web-design.svg"
          alt="Hero Illustration"
          class="w-full max-w-md"
        />
      </div>
    </div>

    <!-- divider -->
    <div class="h-20 bg-gradient-to-b from-indigo-600 to-gray-50"></div>
  </section>
</template>
