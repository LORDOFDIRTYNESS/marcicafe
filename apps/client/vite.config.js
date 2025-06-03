import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

export default defineConfig({
  base: '/', // important for SPA on Render
  publicDir: 'public', // make sure Vite copies this during build
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  optimizeDeps: {
    include: ['vue-i18n']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    host: process.env.HOST,
    allowedHosts: [
      "19a7-2607-fa49-c339-c200-8b2-8f6e-9cb7-5d0d.ngrok-free.app"
    ]
  }
});
