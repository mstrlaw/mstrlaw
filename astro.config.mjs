// @ts-check
import { defineConfig } from 'astro/config'
import { imageService } from '@unpic/astro/service'
import tailwindcss from '@tailwindcss/vite'
import vue from '@astrojs/vue'
import { templateCompilerOptions } from '@tresjs/core'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  build: {
    // The whole site's CSS is ~6 KB brotli'd, so two extra render-blocking
    // round trips cost far more than the bytes. Inlining removes them.
    inlineStylesheets: 'always',
  },
  integrations: [
    // TresJS needs its isCustomElement compiler option passed to the Vue
    // integration so <Tres*> tags aren't resolved as Vue components.
    vue({
      ...templateCompilerOptions,
    }),
  ],
  image: {
    service: imageService(),
  },
})
