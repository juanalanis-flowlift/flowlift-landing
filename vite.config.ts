import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// host/allowedHosts: para que `npm run dev` también abra desde Codespaces o Replit (solo desarrollo)
export default defineConfig({
  plugins: [react()],
  server: { host: true, allowedHosts: true },
})
