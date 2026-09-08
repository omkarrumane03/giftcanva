<script setup>
import { site, whatsappLink } from '../data/site.js'
import { useInquiry } from '../composables/useInquiry.js'
import { products } from '../data/products.js'
import IconBase from './IconBase.vue'

const { openInquiry } = useInquiry()

const stats = [
  { value: '75+', label: 'Years of TTK Prestige trust' },
  { value: `${products.length}+`, label: 'Products across 10 categories' },
  { value: 'Pan-India', label: 'Delivery & service support' },
]

const patternUrl = `${import.meta.env.BASE_URL}hero-pattern.svg`

const heroMessage =
  'Hi GiftCanva, I would like a bulk gifting quotation. Please share options and pricing.'
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-[112px]">
    <!-- decorative wash -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-teal-100/60 blur-3xl" />
      <div class="absolute -right-24 top-24 h-[380px] w-[380px] rounded-full bg-coral-100/60 blur-3xl" />
      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
    </div>

    <div class="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
      <div class="animate-fade-up">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-teal-700"
        >
          <IconBase name="sparkle" class="h-3.5 w-3.5" />
          Powered by TTK Prestige &amp; Judge
        </span>

        <h1 class="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          A One-Stop Solution for
          <span class="relative whitespace-nowrap text-teal-600">
            Every Gifting
            <svg
              class="absolute -bottom-1.5 left-0 h-2.5 w-full text-gold-300"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 7c40-5 80-5 120-2s60 3 76 0" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" />
            </svg>
          </span>
          Occasion
        </h1>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Corporate teams, festive hampers, weddings, dealer rewards, events or a large family
          order — GiftCanva curates practical, premium kitchen and home gifts at genuine bulk
          pricing, delivered anywhere in India.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <button type="button" class="btn-primary" @click="openInquiry()">
            <IconBase name="send" class="h-4 w-4" />
            Request Bulk Quote
          </button>
          <a
            :href="whatsappLink(heroMessage)"
            target="_blank"
            rel="noopener"
            class="btn-whatsapp"
          >
            <IconBase name="whatsapp" class="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <a :href="site.phoneHref" class="btn-ghost">
            <IconBase name="phone" class="h-4 w-4" />
            {{ site.phoneDisplay }}
          </a>
        </div>

        <dl class="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-7">
          <div v-for="stat in stats" :key="stat.label">
            <dt class="font-display text-2xl font-semibold text-ink sm:text-3xl">{{ stat.value }}</dt>
            <dd class="mt-1 text-xs leading-snug text-ink-muted">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <!-- hero visual: catalogue collage placeholder -->
      <div class="animate-fade-up [animation-delay:120ms]">
        <div class="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div class="absolute inset-0 rotate-3 rounded-4xl bg-teal-600/8" />
          <div class="absolute inset-0 -rotate-2 rounded-4xl bg-coral-500/8" />
          <div
            class="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-4xl border border-ink/8 p-8 text-center shadow-lift"
            :style="{ backgroundImage: `url('${patternUrl}')`, backgroundSize: '200px auto' }"
          >
            <!-- warm scrim so the "crafted with love" copy stays legible over the pattern -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-teal-900/70 via-ink/35 to-coral-900/70"
              aria-hidden="true"
            />
            <span class="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
              <IconBase name="gift" class="h-8 w-8" />
            </span>
            <p class="relative font-display text-xl font-semibold text-white">
              Crafted with love.<br />Perfect for gifting.
            </p>
            <p class="relative max-w-xs text-sm leading-relaxed text-white/85">
              Pressure cookers, cookware, appliances, drinkware and curated combi packs — all in
              one catalogue.
            </p>
            <a href="#catalogue" class="btn-quiet relative mt-2 bg-white text-ink hover:bg-white/90">
              Browse the catalogue
              <IconBase name="chevronDown" class="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
