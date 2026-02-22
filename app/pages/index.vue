<script setup>
useSeoMeta({
  title: 'Judul Halaman',
  description: 'Deskripsi SEO',
  ogTitle: 'Judul untuk social media',
  ogDescription: 'Deskripsi untuk share',
})

useHead({
  title: 'Solusi Digital untuk Bisnis Modern | PT Sanjaya Digital',
  meta: [
    {
      name: 'description',
      content:
        'Kami membantu bisnis berkembang melalui website profesional, aplikasi modern, dan sistem digital handal.',
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <WhyUsSection />
    <ServicesSection />
    <PricingSection />
    <TestimonialSection />
    <CTASection />
    <ContactSection />
  </div>
</template>
