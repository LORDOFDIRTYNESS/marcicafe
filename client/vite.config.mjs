import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  build: {
    outDir: '../server/public', // 👈 Send build output to server
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});