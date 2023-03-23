import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dynamisk_cv_hemsida/',
  plugins: [react()],
})
