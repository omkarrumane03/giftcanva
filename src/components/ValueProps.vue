<script setup>
import { valueProps } from '../data/site.js'
import IconBase from './IconBase.vue'
</script>

<template>
  <section id="why-giftcanva" class="scroll-mt-24 py-20 sm:py-24">
    <div class="container-x">
      <div class="max-w-2xl">
        <p class="eyebrow">Why GiftCanva</p>
        <h2 class="section-title mt-3">Gifts people actually keep, at prices that work in bulk</h2>
        <p class="mt-4 text-base leading-relaxed text-ink-soft">
          Every order is backed by a brand Indian households have trusted for decades, quoted
          transparently against your quantity and delivered with real after-sales support.
        </p>
      </div>

      <ul class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(item, i) in valueProps"
          :key="item.title"
          class="group relative rounded-3xl border border-ink/8 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
          :style="{ animationDelay: `${i * 60}ms` }"
        >
          <span
            class="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white"
          >
            <IconBase :name="item.icon" class="h-5 w-5" />
          </span>
          <h3 class="mt-5 font-display text-lg font-semibold">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
