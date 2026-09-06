<script setup>
import { ref, computed } from 'vue'
import { products, categories } from '../data/products.js'
import ProductCard from './ProductCard.vue'
import IconBase from './IconBase.vue'

const activeCategory = ref('all')
const query = ref('')
const visibleCount = ref(12)

const tabs = computed(() => [{ id: 'all', label: 'All Products' }, ...categories])

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return products.filter((p) => {
    const inCategory = activeCategory.value === 'all' || p.category === activeCategory.value
    if (!inCategory) return false
    if (!q) return true
    const haystack = `${p.name} ${p.brand} ${p.series} ${p.spec}`.toLowerCase()
    return haystack.includes(q)
  })
})

const visible = computed(() => filtered.value.slice(0, visibleCount.value))
const hasMore = computed(() => filtered.value.length > visibleCount.value)

function selectCategory(id) {
  activeCategory.value = id
  visibleCount.value = 12
}

function onSearch() {
  visibleCount.value = 12
}

function loadMore() {
  visibleCount.value += 12
}
</script>

<template>
  <section id="catalogue" class="scroll-mt-24 bg-canvas-deep/60 py-20 sm:py-24">
    <div class="container-x">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-xl">
          <p class="eyebrow">Full Catalogue</p>
          <h2 class="section-title mt-3">Browse every gifting option in one place</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
            {{ products.length }} curated products across {{ categories.length }} categories.
            Prices are quoted directly for bulk orders — tap any product to request pricing.
          </p>
        </div>

        <label class="relative w-full sm:w-72" for="catalogue-search">
          <IconBase name="search" class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
          <input
            id="catalogue-search"
            v-model="query"
            type="search"
            placeholder="Search products, brands, series…"
            class="field !pl-10"
            @input="onSearch"
          />
        </label>
      </div>

      <div class="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="
            activeCategory === tab.id
              ? 'bg-teal-600 text-white shadow-card'
              : 'bg-white text-ink-soft hover:bg-ink/5'
          "
          @click="selectCategory(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>

      <p class="mt-5 text-xs font-medium text-ink-muted">
        Showing {{ visible.length }} of {{ filtered.length }} product{{ filtered.length === 1 ? '' : 's' }}
      </p>

      <TransitionGroup
        v-if="visible.length"
        tag="div"
        class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
        enter-active-class="animate-pop-in"
      >
        <ProductCard v-for="product in visible" :key="product.id" :product="product" />
      </TransitionGroup>

      <div v-else class="mt-16 flex flex-col items-center gap-3 text-center">
        <span class="grid h-14 w-14 place-items-center rounded-2xl bg-white text-ink-muted">
          <IconBase name="search" class="h-6 w-6" />
        </span>
        <p class="font-display text-lg font-semibold">No products match your search</p>
        <p class="max-w-sm text-sm text-ink-muted">
          Try a different keyword or category — or ask us directly, we likely carry it.
        </p>
      </div>

      <div v-if="hasMore" class="mt-10 flex justify-center">
        <button type="button" class="btn-ghost" @click="loadMore">
          Load more products
          <IconBase name="chevronDown" class="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
</template>
