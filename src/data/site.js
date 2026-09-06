// Single source of truth for everything brand + contact related.
export const site = {
  name: 'GiftCanva',
  title: 'GiftCanva - A one stop solution for gifting',
  tagline: 'GiftCanva — A One-Stop Solution for Every Gifting Occasion',
  phoneDisplay: '+91 76202 82132',
  phoneHref: 'tel:7620282132',
  whatsappNumber: '917620282132',
  whatsappHref: 'https://wa.me/917620282132',
  email: 'giftcanvaa@gmail.com',
  emailHref: 'mailto:giftcanvaa@gmail.com',
}

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message) {
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`
}

/** Build a mailto: link with a pre-filled subject and body. */
export function mailtoLink(subject, body) {
  return `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const valueProps = [
  {
    title: 'Trusted Legacy',
    body: '75+ years of TTK Prestige trust in Indian households — a name your recipients already know and respect.',
    icon: 'shield',
  },
  {
    title: 'Unbeatable Savings',
    body: 'Special bulk discount pricing across every category, quoted transparently against your order size.',
    icon: 'tag',
  },
  {
    title: 'Versatile Range',
    body: 'Kitchenware, appliances and home solutions for every occasion, budget and recipient profile.',
    icon: 'grid',
  },
  {
    title: 'Practical & Long-Lasting',
    body: 'High-utility gifts that get used every single day — appreciated by every recipient, never re-gifted.',
    icon: 'sparkle',
  },
  {
    title: 'Flexible Budgets',
    body: 'Customisable pricing tiers and curated hampers built to fit any budget, from token gifts to premium sets.',
    icon: 'sliders',
  },
  {
    title: 'Nationwide Service Support',
    body: 'Pan-India service network and warranty backing — complete peace of mind long after delivery.',
    icon: 'map',
  },
]

export const occasions = [
  { title: 'Corporate & Employee Gifting', note: 'Onboarding, milestones, appreciation' },
  { title: 'Festive & Diwali Hampers', note: 'Teams, clients, vendors, societies' },
  { title: 'Weddings & Family Functions', note: 'Return gifts at scale, curated sets' },
  { title: 'Dealer & Channel Rewards', note: 'Sales incentives and loyalty programmes' },
  { title: 'Events & Conferences', note: 'Speaker kits, delegate giveaways' },
  { title: 'Individual Bulk Buyers', note: 'Societies, trusts, schools, clubs' },
]

export const steps = [
  {
    title: 'Share your requirement',
    body: 'Tell us the occasion, quantity and budget range. One WhatsApp message or a call is enough to start.',
  },
  {
    title: 'Get a curated proposal',
    body: 'We shortlist the right products across budget tiers and send you a written bulk quotation.',
  },
  {
    title: 'Confirm and personalise',
    body: 'Lock the selection, add gift packaging and branding, and approve the final order.',
  },
  {
    title: 'Delivered nationwide',
    body: 'Single or multi-location dispatch across India, with service and warranty support after delivery.',
  },
]
