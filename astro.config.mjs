// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://asrs18.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'it', 'pt'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
