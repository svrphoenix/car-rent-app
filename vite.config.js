import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/car-rent-app/',
  plugins: [react()],
  server: {
    open: '/car-rent-app/',
    host: true,
  },
});
