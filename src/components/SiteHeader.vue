<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { site } from '../data/site.js'
import { useInquiry } from '../composables/useInquiry.js'
import IconBase from './IconBase.vue'

const { openInquiry } = useInquiry()
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { href: '#why-giftcanva', label: 'Why GiftCanva' },
  { href: '#catalogue', label: 'Catalogue' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function requestQuoteFromMenu() {
  menuOpen.value = false
  openInquiry()
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition"
    :class="scrolled ? 'bg-canvas/85 shadow-card backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="container-x flex h-[68px] items-center justify-between gap-4">
      <a href="#top" class="flex items-center gap-2.5" aria-label="GiftCanva home">
        <span
          class="grid h-9 w-9 place-items-center rounded-xl bg-teal-600 font-display text-lg font-semibold text-white"
        >
          G
        </span>
        <span class="leading-tight">
          <span class="block font-display text-lg font-semibold tracking-tight">GiftCanva</span>
          <span class="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Gifting, simplified
          </span>
        </span>
      </a>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-ink-soft transition hover:text-teal-600"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="site.phoneHref"
          class="hidden items-center gap-2 text-sm font-semibold text-ink transition hover:text-teal-600 sm:flex"
        >
          <IconBase name="phone" class="h-4 w-4" />
          {{ site.phoneDisplay }}
        </a>
        <button type="button" class="btn-primary hidden sm:inline-flex" @click="openInquiry()">
          Request Bulk Quote
        </button>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white lg:hidden"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <IconBase :name="menuOpen ? 'x' : 'grid'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div v-if="menuOpen" class="border-t border-ink/8 bg-canvas/95 backdrop-blur-md lg:hidden">
        <nav class="container-x flex flex-col py-3" aria-label="Mobile">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="rounded-lg px-2 py-3 text-sm font-medium text-ink-soft hover:bg-ink/5"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
          <button type="button" class="btn-primary mt-2" @click="requestQuoteFromMenu">
            Request Bulk Quote
          </button>
        </nav>
      </div>
    </Transition>
  </header>
</template>
