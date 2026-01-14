/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // KLUCZOWE: Pozwala sterować trybem przez klasę 'dark' w <html>
  theme: {
    extend: {
      colors: {
        // Definiujemy kolory semantyczne, które będą się zmieniać w CSS
        bg: { 
          primary: 'var(--bg-primary)', 
          secondary: 'var(--bg-secondary)', 
          tertiary: 'var(--bg-tertiary)' 
        },
        text: { 
          primary: 'var(--text-primary)', 
          secondary: 'var(--text-secondary)' 
        },
        accent: { 
          primary: '#10b981' // Zieleń (bez zmian)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}