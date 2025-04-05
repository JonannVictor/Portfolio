import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/portfolio/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 3000, 
  }
})
