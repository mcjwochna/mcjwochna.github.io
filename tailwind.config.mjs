/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme colors - mapped from CSS variables
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
          primary: '#10b981',
          'text-safe': 'var(--accent-text-safe)'
        },
        
        // NEW: Semantic feedback colors
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)'
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      
      boxShadow: {
        'glass': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 10px 40px -10px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    
    // Plugin for screen-reader-only utility
    function({ addUtilities }) {
      addUtilities({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0'
        },
        '.not-sr-only': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal'
        }
      })
    }
  ],
}