import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3039,
    host: true, // Allow external connections
    cors: true
  },
  preview: {
    port: 3039,
    host: true
  }
})

