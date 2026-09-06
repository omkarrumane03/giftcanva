<script setup>
import { occasions } from '../data/site.js'
</script>

<template>
  <section class="border-y border-ink/8 bg-white/60">
    <div class="container-x py-10">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
        Trusted for every kind of bulk gifting requirement
      </p>
      <ul class="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="item in occasions"
          :key="item.title"
          class="flex items-baseline gap-3 border-l-2 border-teal-200 pl-3"
        >
          <span class="text-sm font-semibold text-ink">{{ item.title }}</span>
          <span class="text-xs text-ink-muted">{{ item.note }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
