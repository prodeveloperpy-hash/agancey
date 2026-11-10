import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Stable asset names so each deploy overwrites the same JS/CSS (avoids stale index + hash mismatch on cPanel). */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? ''
          if (name.endsWith('.css')) return 'assets/app.css'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
