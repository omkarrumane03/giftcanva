<script setup>
import { site } from '../data/site.js'
import { categories } from '../data/products.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-ink/8 bg-canvas py-12">
    <div class="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div class="lg:col-span-2">
        <div class="flex items-center gap-2.5">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-teal-600 font-display text-lg font-semibold text-white">G</span>
          <span class="font-display text-lg font-semibold">GiftCanva</span>
        </div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
          GiftCanva is a bulk gifting partner featuring TTK Prestige and Judge — 75+ years of
          trust in Indian households, curated into practical, long-lasting gifts for every
          occasion and every budget.
        </p>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-ink-muted">Catalogue</p>
        <ul class="mt-4 space-y-2.5">
          <li v-for="cat in categories.slice(0, 6)" :key="cat.id">
            <a href="#catalogue" class="text-sm text-ink-soft hover:text-teal-600">{{ cat.label }}</a>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-ink-muted">Contact</p>
        <ul class="mt-4 space-y-2.5 text-sm text-ink-soft">
          <li><a :href="site.phoneHref" class="hover:text-teal-600">{{ site.phoneDisplay }}</a></li>
          <li><a :href="site.emailHref" class="hover:text-teal-600">{{ site.email }}</a></li>
          <li><a :href="site.whatsappHref" target="_blank" rel="noopener" class="hover:text-teal-600">WhatsApp us</a></li>
        </ul>
      </div>
    </div>

    <div class="container-x mt-10 flex flex-col gap-2 border-t border-ink/8 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} GiftCanva. All rights reserved.</p>
      <p>Product images and names are indicative; final selection is confirmed at quotation.</p>
    </div>
  </footer>
</template>
