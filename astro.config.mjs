// @ts-check
import { defineConfig } from 'astro/config';

import liciousI18n from '@astrolicious/i18n';

// https://astro.build/config
export default defineConfig({
  integrations: [liciousI18n({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  })]
});