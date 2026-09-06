<script setup>
import { ref, watch, computed } from 'vue'
import { useInquiry } from '../composables/useInquiry.js'
import { site, whatsappLink, mailtoLink } from '../data/site.js'
import IconBase from './IconBase.vue'

const { inquiryState, closeInquiry } = useInquiry()

const form = ref({ name: '', company: '', phone: '' })
const submitted = ref(false)

watch(
  () => inquiryState.open,
  (open) => {
    if (open) {
      submitted.value = false
      form.value = { name: '', company: '', phone: '' }
    }
  }
)

const summaryLine = computed(() =>
  inquiryState.product ? `${inquiryState.product.name} — ${inquiryState.product.spec}` : null
)

function buildMessage() {
  const f = form.value
  const lines = [
    'New bulk gifting enquiry from GiftCanva website:',
    summaryLine.value ? `Product: ${summaryLine.value}` : null,
    f.name ? `Name: ${f.name}` : null,
    f.company ? `Company / Group: ${f.company}` : null,
    f.phone ? `Phone: ${f.phone}` : null,
  ].filter(Boolean)
  return lines.join('\n')
}

function submitWhatsapp() {
  submitted.value = true
  window.open(whatsappLink(buildMessage()), '_blank', 'noopener')
}

function submitEmail() {
  submitted.value = true
  window.location.href = mailtoLink(
    `Bulk Gifting Enquiry${summaryLine.value ? ' — ' + summaryLine.value : ''}`,
    buildMessage()
  )
}

function onOverlayClick(e) {
  if (e.target === e.currentTarget) closeInquiry()
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="opacity-0"
  >
    <div
      v-if="inquiryState.open"
      class="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      @click="onOverlayClick"
      @keydown.esc="closeInquiry"
    >
      <Transition
        enter-active-class="transition duration-250 ease-out"
        enter-from-class="translate-y-6 opacity-0 sm:translate-y-0 sm:scale-95"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="translate-y-6 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-if="inquiryState.open"
          class="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-lift sm:rounded-3xl"
        >
          <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink/8 bg-white px-6 py-5">
            <div>
              <h2 id="inquiry-title" class="font-display text-xl font-semibold">Request a Bulk Quote</h2>
              <p v-if="summaryLine" class="mt-1 text-sm text-teal-700">{{ summaryLine }}</p>
              <p v-else class="mt-1 text-sm text-ink-muted">Share your details — we'll take it from there.</p>
            </div>
            <button
              type="button"
              class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink/5 text-ink-soft hover:bg-ink/10"
              aria-label="Close"
              @click="closeInquiry"
            >
              <IconBase name="x" class="h-4 w-4" />
            </button>
          </div>

          <form class="space-y-4 px-6 py-6" @submit.prevent="submitWhatsapp">
            <div>
              <label class="label" for="f-name">Your name</label>
              <input id="f-name" v-model="form.name" type="text" class="field" placeholder="Full name" />
            </div>

            <div>
              <label class="label" for="f-company">Company / Group</label>
              <input id="f-company" v-model="form.company" type="text" class="field" placeholder="Optional" />
            </div>

            <div>
              <label class="label" for="f-phone">Phone number</label>
              <input id="f-phone" v-model="form.phone" type="tel" class="field" placeholder="10-digit number" />
            </div>

            <p class="text-xs text-ink-muted">
              Send this straight to us on WhatsApp or email — our team will follow up with bulk
              pricing and options.
            </p>

            <div class="flex flex-col gap-2.5 pt-1 sm:flex-row">
              <button type="submit" class="btn-whatsapp flex-1">
                <IconBase name="whatsapp" class="h-4 w-4" />
                Send via WhatsApp
              </button>
              <button type="button" class="btn-ghost flex-1" @click="submitEmail">
                <IconBase name="mail" class="h-4 w-4" />
                Send via Email
              </button>
            </div>

            <p v-if="submitted" class="flex items-center gap-1.5 text-xs font-medium text-teal-700">
              <IconBase name="check" class="h-3.5 w-3.5" />
              Opening your message — complete sending it to reach our team instantly.
            </p>
          </form>

          <div class="border-t border-ink/8 bg-canvas-deep/60 px-6 py-4 text-center text-sm text-ink-soft">
            Prefer to talk it through? Call us directly on
            <a :href="site.phoneHref" class="font-semibold text-teal-700 underline-offset-2 hover:underline">{{ site.phoneDisplay }}</a>
            and we'll discuss your requirement right away.
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
