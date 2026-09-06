<script setup>
import { whatsappLink } from '../data/site.js'
import IconBase from './IconBase.vue'

const message = 'Hi GiftCanva, I would like to enquire about bulk gifting options.'
</script>

<template>
  <a
    :href="whatsappLink(message)"
    target="_blank"
    rel="noopener"
    class="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF54] text-white shadow-lift transition hover:scale-105 hover:bg-[#199845] sm:bottom-6 sm:right-6"
    aria-label="Chat with GiftCanva on WhatsApp"
  >
    <span class="absolute inset-0 animate-ping rounded-full bg-[#1FAF54]/50" aria-hidden="true" />
    <IconBase name="whatsapp" class="relative h-6 w-6" />
  </a>
</template>
