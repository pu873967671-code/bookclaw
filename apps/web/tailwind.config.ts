import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#F5F2EA',
        ink: {
          DEFAULT: '#1A1814',
          60: 'rgba(26, 24, 20, 0.6)',
          30: 'rgba(26, 24, 20, 0.3)',
          10: 'rgba(26, 24, 20, 0.08)',
        },
        amber: {
          DEFAULT: '#C8853A',
          light: '#F0D9B8',
        },
        teal: {
          DEFAULT: '#2A7B6F',
          light: '#C4E0DA',
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
