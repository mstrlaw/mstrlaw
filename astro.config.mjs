// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      /* Vite aliases */
      alias: {
        '@': '/src',
      },
  },
  },
  output: 'static',
  integrations: [vue()],
  adapter: netlify(),
});