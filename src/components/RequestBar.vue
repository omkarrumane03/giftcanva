<script setup>
import { useInquiry } from '../composables/useInquiry.js'
import { whatsappLink } from '../data/site.js'
import IconBase from './IconBase.vue'

const { openInquiry } = useInquiry()

const message =
  "Hi GiftCanva, I'm looking for a Prestige/Judge product that isn't listed on your site. Can you source it for bulk order?"
</script>

<template>
  <!-- Fixed directly under the header (which is h-[68px]) so both stay
       pinned together on scroll. Height is locked to h-11 and the content
       row never wraps — it scrolls horizontally instead whenever the
       window is too narrow for it to fit — so the combined header+bar
       offset used elsewhere (HeroSection's pt, style.css's
       scroll-padding-top) stays exact.

       The inner row is centered with `mx-auto` on a `w-max` block rather
       than `justify-center` on the scroll container: `justify-center` on
       an overflowing flex row scrolls its own start out of view (you'd
       see the middle of the sentence first, both ends clipped) at ANY
       width narrower than the content — not just on phones, e.g. two
       browser windows split side by side. `mx-auto` centers only while
       there's room to spare, and degrades to a true left-aligned,
       scroll-from-the-start row once it overflows. -->
  <div class="fixed inset-x-0 top-[68px] z-30 flex h-11 items-center bg-ink text-white shadow-card">
    <div class="no-scrollbar container-x overflow-x-auto">
      <div class="flex w-max items-center gap-x-4 whitespace-nowrap mx-auto">
        <span class="inline-flex items-center gap-1.5 text-sm font-bold tracking-tight sm:text-base">
          <IconBase name="sparkle" class="h-[18px] w-[18px] shrink-0 text-gold-300" />
          Can't find a Prestige or Judge product here? We source almost anything from their
          full range.
        </span>
        <span class="inline-flex items-center gap-2">
          <button
            type="button"
            class="rounded-full bg-gold-300 px-3.5 py-1.5 text-sm font-bold text-ink transition hover:bg-gold-200"
            @click="openInquiry()"
          >
            Enquire now
          </button>
          <a
            :href="whatsappLink(message)"
            target="_blank"
            rel="noopener"
            class="rounded-full border border-white/30 px-3.5 py-1.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            WhatsApp us
          </a>
        </span>
      </div>
    </div>
  </div>
</template>
