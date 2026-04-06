import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio-v2/' : '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
}))
