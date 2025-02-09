// @ts-check
import { defineConfig } from 'astro/config';
import { imageService } from '@unpic/astro/service';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  integrations: [
    vue(),
    purgecss({
      extractors: [
        {
          // Example using a tailwindcss compatible class extractor
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ['astro', 'html'],
        },
      ],
    }),
  ],
  adapter: netlify(),
  image: {
    service: imageService(),
  },
});
