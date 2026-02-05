<template>
  <Navbar />

  <!-- kasih padding-top karena navbar fixed -->
  <main class="pt-16">
    <slot />
  </main>

  <Footer />
</template>
