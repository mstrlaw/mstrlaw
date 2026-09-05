// @ts-check
import { defineConfig } from 'astro/config'
import { imageService } from '@unpic/astro/service'
import tailwindcss from '@tailwindcss/vite'
import vue from '@astrojs/vue'
import { templateCompilerOptions } from '@tresjs/core'

import compressor from 'astro-compressor'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  integrations: [
    // TresJS needs its isCustomElement compiler option passed to the Vue
    // integration so <Tres*> tags aren't resolved as Vue components.
    vue({
      ...templateCompilerOptions,
    }),
    compressor(),
  ],
  image: {
    service: imageService(),
  },
})
