<template>
  <div class="fixed bottom-6 right-6 z-50 group">
    <!-- Tooltip -->
    <div
      class="absolute bottom-full right-0 mb-3 px-4 py-2 text-sm text-white bg-gray-800 rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
    >
      Chat via WhatsApp
    </div>

    <!-- Button -->
    <a
      :href="waLink"
      target="_blank"
      rel="noopener"
      class="relative w-14 h-14 flex items-center justify-center bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110"
    >
      <!-- Pulse -->
      <span
        class="absolute inset-0 rounded-full bg-green-600 opacity-75 animate-ping"
      ></span>

      <!-- WhatsApp Logo -->
      <svg
        class="relative w-7 h-7 fill-white"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.646.865 5.087 2.326 7.055L4 29l7.145-2.295A11.93 11.93 0 0 0 16.002 27C22.63 27 28 21.628 28 15.002 28 8.373 22.63 3 16.002 3zm0 21.818a9.78 9.78 0 0 1-4.992-1.374l-.357-.213-4.236 1.36 1.382-4.126-.232-.375A9.778 9.778 0 0 1 6.22 15c0-5.393 4.39-9.784 9.782-9.784 5.394 0 9.784 4.39 9.784 9.784 0 5.392-4.39 9.818-9.784 9.818zm5.356-7.37c-.293-.147-1.732-.854-2.001-.949-.268-.098-.463-.147-.658.147-.196.293-.758.948-.93 1.145-.171.196-.342.22-.635.073-.293-.147-1.237-.456-2.355-1.454-.87-.776-1.457-1.734-1.629-2.027-.171-.293-.018-.45.129-.597.132-.132.293-.342.439-.513.147-.171.196-.293.293-.489.098-.196.049-.366-.024-.513-.073-.147-.658-1.587-.9-2.175-.236-.568-.476-.49-.658-.5-.171-.01-.366-.012-.561-.012-.196 0-.513.073-.781.366-.268.293-1.025 1.002-1.025 2.441 0 1.439 1.05 2.83 1.197 3.024.147.196 2.065 3.156 5.005 4.425.699.302 1.245.483 1.67.618.702.224 1.341.192 1.847.117.564-.084 1.732-.708 1.977-1.392.244-.684.244-1.27.171-1.392-.073-.122-.268-.196-.561-.342z"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
const phoneNumber = '6289531310890' // tanpa +
const message = 'Halo, saya tertarik dengan layanan Anda.'

const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`
</script>
