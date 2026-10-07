import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { createHash } from 'node:crypto';
import { THEME_INIT_SCRIPT } from './src/scripts/theme-init.mjs';

const sha256 = (source) => `sha256-${createHash('sha256').update(source).digest('base64')}`;

export default defineConfig({
  site: 'https://maciejwochna.pl',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Shiki emits inline style attributes, which the hash-based CSP below would block.
    syntaxHighlight: false,
  },
  security: {
    csp: {
      // is:inline scripts are not hashed automatically
      scriptDirective: {
        hashes: [sha256(THEME_INIT_SCRIPT)],
      },
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        'frame-src https://app.powerbi.com',
        "connect-src 'self' https://in2data.pl",
        "form-action 'self' https://in2data.pl",
        "object-src 'none'",
        "base-uri 'self'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
