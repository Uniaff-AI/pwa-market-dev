// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Статическая генерация
  
  // Базовая конфигурация для деплоя
  site: 'https://uniaffocto.com',
  base: '/',
  
  // Правильная обработка trailing slash
  trailingSlash: 'ignore',
  
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    // Оптимизация для продакшена
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom']
          }
        }
      }
    }
  },

  integrations: [
    react()
  ]
});
