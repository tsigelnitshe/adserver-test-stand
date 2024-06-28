import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist', // укажите путь, где будет размещено приложение
  plugins: [react()],
});
