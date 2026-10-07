// Inlined in <head> so the theme class is set before first paint; astro.config.mjs hashes this exact string for the CSP.
export const THEME_INIT_SCRIPT = `try {
  const theme = localStorage.getItem('theme') ??
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
} catch {}`;
