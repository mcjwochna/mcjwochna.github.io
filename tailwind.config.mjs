/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: { 
          primary: '#0a0a0a', 
          secondary: '#111111', 
          tertiary: '#1a1a1a' 
        },
        text: { 
          primary: '#ffffff', 
          secondary: '#a0a0a0' 
        },
        accent: { 
          primary: '#10b981' 
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}