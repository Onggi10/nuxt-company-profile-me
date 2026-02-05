<template>
  <nav class="bg-white shadow fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold text-blue-600">
          Sanjaya Digital
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </div>

        <!-- Mobile Button -->
        <button
          class="md:hidden text-gray-700"
          @click="isOpen = !isOpen"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white shadow">
      <div class="px-6 py-4 flex flex-col gap-4">
        <NuxtLink @click="close" to="/">Home</NuxtLink>
        <NuxtLink @click="close" to="/about">About</NuxtLink>
        <NuxtLink @click="close" to="/services">Services</NuxtLink>
        <NuxtLink @click="close" to="/contact">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const close = () => (isOpen.value = false)
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-blue-600 font-medium transition;
}
</style>
