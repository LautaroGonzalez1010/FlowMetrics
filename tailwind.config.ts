import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#FDFBF7',
          surface: '#FFFFFF',
          border: '#E8E2D9',
          text: '#2D2A26',
          muted: '#6B6560',
        },
        accent: {
          terracota: '#C4704B',
          sage: '#7C9070',
          mustard: '#B8860B',
          cream: '#F5EFE6',
        }
      }
    },
  },
  plugins: [],
} satisfies Config