import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: "/murzaev-dev", // Use repository name as base path for GitHub Pages
  plugins: [
    tailwindcss(),
    react()
  ],
})
