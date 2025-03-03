// @ts-check
import { defineConfig } from 'astro/config';
import { imageService } from '@unpic/astro/service';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  integrations: [vue(), compressor()],
  adapter: netlify(),
  image: {
    service: imageService(),
  },
});