import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mcjwochna.github.io', 
  integrations: [tailwind()],
});