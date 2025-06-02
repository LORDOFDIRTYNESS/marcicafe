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
  server: {
    host: process.env.HOST,
    allowedHosts: [
      "19a7-2607-fa49-c339-c200-8b2-8f6e-9cb7-5d0d.ngrok-free.app"
    ]
  }
});