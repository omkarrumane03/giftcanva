<script setup>
import { steps } from '../data/site.js'
</script>

<template>
  <section id="how-it-works" class="scroll-mt-24 py-20 sm:py-24">
    <div class="container-x">
      <div class="max-w-xl">
        <p class="eyebrow">How It Works</p>
        <h2 class="section-title mt-3">From enquiry to delivery in four simple steps</h2>
      </div>

      <ol class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(step, i) in steps" :key="step.title" class="relative pl-12">
          <span
            class="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full bg-teal-600 font-display text-sm font-semibold text-white"
          >
            {{ i + 1 }}
          </span>
          <h3 class="font-display text-base font-semibold leading-snug">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ step.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
