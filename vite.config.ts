// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';


export default defineConfig({
  plugins: [react(), imagetools()],
  build: {
    outDir: 'dist',
  },
  base: '/',
})
