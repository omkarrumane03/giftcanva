<script setup>
import { site, whatsappLink, mailtoLink } from '../data/site.js'
import { useInquiry } from '../composables/useInquiry.js'
import IconBase from './IconBase.vue'

const { openInquiry } = useInquiry()
const generalMessage = 'Hi GiftCanva, I would like to know more about your bulk gifting catalogue and pricing.'

const channels = [
  {
    icon: 'phone',
    title: 'Call us',
    value: site.phoneDisplay,
    href: site.phoneHref,
    cta: 'Call now',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    value: site.phoneDisplay,
    href: whatsappLink(generalMessage),
    cta: 'Start chat',
    external: true,
  },
  {
    icon: 'mail',
    title: 'Email',
    value: site.email,
    href: mailtoLink('Bulk Gifting Enquiry', generalMessage),
    cta: 'Send email',
  },
]
</script>

<template>
  <section id="contact" class="scroll-mt-24 bg-ink py-20 text-white sm:py-24">
    <div class="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Get in Touch</p>
        <h2 class="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Let's put together the perfect gifting order
        </h2>
        <p class="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
          Share your occasion, quantity and budget — our team responds with a curated proposal
          and bulk pricing, usually within one business day.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" class="btn-accent" @click="openInquiry()">
            <IconBase name="send" class="h-4 w-4" />
            Open Enquiry Form
          </button>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <a
          v-for="ch in channels"
          :key="ch.title"
          :href="ch.href"
          :target="ch.external ? '_blank' : undefined"
          :rel="ch.external ? 'noopener' : undefined"
          class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/10"
        >
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-teal-300 transition group-hover:bg-teal-500 group-hover:text-white">
            <IconBase :name="ch.icon" class="h-5 w-5" />
          </span>
          <span class="min-w-0">
            <span class="block text-xs font-semibold uppercase tracking-wide text-white/50">{{ ch.title }}</span>
            <span class="block truncate text-sm font-semibold">{{ ch.value }}</span>
          </span>
          <span class="ml-auto shrink-0 text-xs font-semibold text-teal-300">{{ ch.cta }} →</span>
        </a>
      </div>
    </div>
  </section>
</template>
