// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import { defineManifest } from '@astrojs/pwa';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  },

  integrations: [
    react(),
    defineManifest({
      name: 'Klik Obat',
      short_name: 'Klik Obat',
      description: 'Онлайн аптека Klik Obat',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#01875f',
      icons: [
        {
          src: '/favicon_v3.ico',
          sizes: 'any',
          type: 'image/x-icon'
        }
      ]
    })
  ]
});