// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://sensorbucket.nl",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});
