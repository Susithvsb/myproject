import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Update this to match your GitHub repository name
// If your repo is "ak-catering-services", the base should be "/ak-catering-services/"
// For custom domain or root domain, use "/"
const REPO_NAME = 'ak-catering-services' // CHANGE THIS to your repository name

export default defineConfig({
  plugins: [react()],
  base:'/'
})
