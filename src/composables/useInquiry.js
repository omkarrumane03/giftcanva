import { reactive, readonly } from 'vue'

const state = reactive({
  open: false,
  product: null, // { name, brand, spec } | null for a general enquiry
})

export function useInquiry() {
  function openInquiry(product = null) {
    state.product = product
    state.open = true
    document.documentElement.style.overflow = 'hidden'
  }

  function closeInquiry() {
    state.open = false
    document.documentElement.style.overflow = ''
  }

  return { inquiryState: readonly(state), openInquiry, closeInquiry }
}
