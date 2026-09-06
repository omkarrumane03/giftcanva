<script setup>
import { useInquiry } from '../composables/useInquiry.js'
import { whatsappLink } from '../data/site.js'
import IconBase from './IconBase.vue'

const props = defineProps({
  product: { type: Object, required: true },
})

const { openInquiry } = useInquiry()

function quickWhatsapp() {
  const msg = `Hi GiftCanva, I'm interested in bulk pricing for "${props.product.name} (${props.product.spec})". Please share a quotation.`
  window.open(whatsappLink(msg), '_blank', 'noopener')
}
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"
  >
    <!-- Image slot: intentionally left blank until final product photography
         is added to /public/products/. Swap this div for an <img> later. -->
    <div class="relative aspect-square w-full overflow-hidden bg-canvas-deep">
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink-muted/60">
        <IconBase name="gift" class="h-9 w-9" />
        <span class="text-[11px] font-medium uppercase tracking-wide">Image coming soon</span>
      </div>
      <span
        class="absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
        :class="product.brand === 'Judge' ? 'bg-ink text-white' : 'bg-coral-500 text-white'"
      >
        {{ product.brand }}
      </span>
    </div>

    <div class="flex flex-1 flex-col gap-2 p-4">
      <p class="text-[11px] font-semibold uppercase tracking-wide text-teal-600">{{ product.series }}</p>
      <h3 class="font-display text-base font-semibold leading-snug text-ink">{{ product.name }}</h3>
      <p class="text-sm text-ink-muted">{{ product.spec }}</p>

      <div class="mt-auto flex items-center gap-2 pt-4">
        <button type="button" class="btn-primary flex-1 !px-3 !py-2.5 text-xs" @click="openInquiry(product)">
          Request Bulk Quote
        </button>
        <button
          type="button"
          class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1FAF54]/10 text-[#1FAF54] transition hover:bg-[#1FAF54] hover:text-white"
          aria-label="Ask on WhatsApp"
          @click="quickWhatsapp"
        >
          <IconBase name="whatsapp" class="h-4 w-4" />
        </button>
      </div>
    </div>
  </article>
</template>
