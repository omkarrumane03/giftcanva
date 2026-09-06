<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import OccasionsStrip from './components/OccasionsStrip.vue'
import ValueProps from './components/ValueProps.vue'
import ProductCatalog from './components/ProductCatalog.vue'
import HowItWorks from './components/HowItWorks.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import InquiryModal from './components/InquiryModal.vue'
import WhatsAppFab from './components/WhatsAppFab.vue'
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />
    <main>
      <HeroSection />
      <OccasionsStrip />
      <ValueProps />
      <ProductCatalog />
      <HowItWorks />
      <ContactSection />
    </main>
    <SiteFooter />

    <WhatsAppFab />
    <InquiryModal />
  </div>
</template>
