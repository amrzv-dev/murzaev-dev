import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: "./", // Use relative base path for local development
  plugins: [
    tailwindcss(),
    react()
  ],
})
