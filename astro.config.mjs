import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Zastąp 'twoj-nick' swoim prawdziwym nickiem z GitHuba
  site: 'https://maciejwochna.github.io', 
  integrations: [tailwind()],
});