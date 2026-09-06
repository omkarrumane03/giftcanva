import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative asset paths keep the build working on GitHub Pages no matter what
// the repository is called (user site, project site or a custom domain).
// Override with `VITE_BASE=/my-repo/ npm run build` if you ever need absolute paths.
export default defineConfig({
  base: process.env.VITE_BASE || './',
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 900,
  },
})
