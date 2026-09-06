# GiftCanva

**GiftCanva — A One-Stop Solution for Every Gifting Occasion.**

A bulk-gifting catalogue site built with **Vue 3 (Composition API / `<script setup>`)**,
**Vite** and **Tailwind CSS**, featuring TTK Prestige and Judge kitchenware,
appliances and home solutions. No prices are ever shown on the site — every
product routes to a **"Request Bulk Quote"** call-to-action (WhatsApp, phone,
email or an in-page enquiry form).

---

## 1. Project structure

```
giftcanva/
├─ index.html                  # HTML shell + SEO / Open Graph meta tags
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ products/                # Drop final product photography here (see §5)
├─ src/
│  ├─ main.js                  # App entry point
│  ├─ App.vue                  # Root component / page layout
│  ├─ style.css                # Tailwind layers + shared component classes
│  ├─ composables/
│  │  └─ useInquiry.js         # Shared state for the "Request Bulk Quote" modal
│  ├─ data/
│  │  ├─ site.js                # Brand info, contact links, value props, steps
│  │  └─ products.js             # Full catalogue data (categories + products)
│  └─ components/
│     ├─ SiteHeader.vue
│     ├─ HeroSection.vue
│     ├─ OccasionsStrip.vue
│     ├─ ValueProps.vue
│     ├─ ProductCatalog.vue     # Search + category tabs + product grid
│     ├─ ProductCard.vue
│     ├─ HowItWorks.vue
│     ├─ ContactSection.vue
│     ├─ SiteFooter.vue
│     ├─ InquiryModal.vue       # Bulk quote enquiry form (WhatsApp / email)
│     ├─ WhatsAppFab.vue        # Floating WhatsApp button
│     └─ IconBase.vue           # Inline SVG icon set (no external icon lib)
├─ .github/workflows/deploy.yml # GitHub Actions: build + deploy to Pages
├─ vite.config.js
├─ tailwind.config.js
└─ postcss.config.js
```

---

## 2. Prerequisites

- **Node.js 18+** (Node 20 LTS recommended) and npm.
- Check with `node -v` and `npm -v`.

---

## 3. Local development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`). Open it in
your browser — the app hot-reloads as you edit files in `src/`.

---

## 4. Building for production

```bash
npm run build
```

This outputs a static, production-ready site into `dist/`. You can sanity
check it locally before deploying:

```bash
npm run preview
```

### About `vite.config.js` and `base`

`vite.config.js` defaults to `base: './'` (relative asset paths), which works
correctly out of the box for:

- A GitHub Pages **project site** (`https://<user>.github.io/<repo>/`)
- A GitHub Pages **user/org site** (`https://<user>.github.io/`)
- A **custom domain**

You normally don't need to touch this. If you ever need an absolute base
path instead, override it at build time:

```bash
VITE_BASE=/your-repo-name/ npm run build
```

---

## 5. Adding the real product photography

Every product in `src/data/products.js` currently has `image: null` on
purpose, so `ProductCard.vue` renders a clean **"Image coming soon"**
placeholder instead of a broken image. To wire in real photos:

1. Export/crop the product photo (square image recommended, WebP or JPG).
2. Save it into `public/products/`, e.g. `public/products/tri-ply-cooker.webp`.
3. In `src/data/products.js`, set that product's `image` field to the
   filename, e.g. `image: 'tri-ply-cooker.webp'`.
4. In `src/components/ProductCard.vue`, swap the placeholder `<div>` block
   for an `<img :src="`/products/${product.image}`" ... />`, keeping the
   placeholder as a fallback for any product still missing a photo (e.g. via
   `v-if="product.image"` / `v-else`).

### Open Graph preview image

`index.html` references `/og-image.jpg` for WhatsApp/LinkedIn link previews
(1200×630px recommended). Add that file to `public/og-image.jpg` and update
the placeholder domain `https://giftcanva.example.com/` in `index.html`
(the `og:url`, `og:image`, `twitter:image` and `canonical` tags) to your real
deployed URL once you have one.

---

## 6. Editing content

- **Brand / contact info** (phone, WhatsApp, email, value props, occasions,
  how-it-works steps): `src/data/site.js`
- **Catalogue** (categories + every product's name, brand, series, spec):
  `src/data/products.js`

Both files are plain JS arrays/objects — no build tooling knowledge needed
to add, remove or edit entries.

---

## 7. Deploying to GitHub Pages

You have two options. Pick whichever fits your workflow.

### Option A — GitHub Actions (recommended, auto-deploys on every push)

A workflow is already included at `.github/workflows/deploy.yml`. To enable it:

1. Push this repository to GitHub.
2. In your repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to the `main` branch (or run the workflow manually from the
   **Actions** tab) — it will build the site and deploy `dist/` automatically.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

> The workflow builds with `VITE_BASE=/<repo-name>/` automatically (using the
> repository name), which is what a GitHub Pages **project site** needs. If
> you're deploying to a **user/org site** (a repo literally named
> `<your-username>.github.io`) or a **custom domain**, open
> `.github/workflows/deploy.yml` and remove/comment out the `env: VITE_BASE`
> line under the `Build` step — the default relative `base: './'` is correct
> for both of those cases.

### Option B — Manual deploy with `gh-pages`

A `deploy` script is included using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package (already listed in `devDependencies`):

```bash
npm run deploy
```

This runs `npm run build` and then pushes the contents of `dist/` to a
`gh-pages` branch. Then in your repo, go to **Settings → Pages** and set
**Source** to **Deploy from a branch**, selecting the `gh-pages` branch.

For a project site with this method, set the base path before deploying:

```bash
VITE_BASE=/your-repo-name/ npm run deploy
```

---

## 8. Tech notes

- **Vue 3** with `<script setup>` throughout — no Options API, no Vuex/Pinia
  (state is minimal enough that a small composable, `useInquiry.js`, is
  sufficient for the shared "quote request" modal state).
- **Tailwind CSS** utility classes, with a small set of shared component
  classes (`.btn-primary`, `.field`, `.card`, etc.) defined once in
  `src/style.css` under `@layer components` to keep templates readable.
- No external icon library or UI kit — icons are inline SVG paths in
  `IconBase.vue` to keep the bundle small and avoid extra CDN/npm
  dependencies.
- No backend: the "Request Bulk Quote" flow opens a pre-filled WhatsApp chat
  or `mailto:` email — there is no server-side form submission. If you later
  want submissions logged somewhere, swap `InquiryModal.vue`'s submit
  handlers for a call to your form backend of choice (e.g. Formspree, a
  serverless function, etc.).

---

## 9. Contact configured on this site

- Phone / WhatsApp: **+91 76202 82132**
- Email: **giftcanvaa@gmail.com**

Update these in `src/data/site.js` if they ever change — every button, link
and pre-filled message on the site reads from that single file.
