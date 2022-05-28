import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({}),
    tsconfigPaths(),
    EnvironmentPlugin(['API_KEY_OPEN_WEATHER', 'API_BASE_URL'], {
      loadEnvFiles: true
    })
  ]
})
