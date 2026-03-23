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
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        cream:  '#F5F2EA',
        ink:    '#1A1814',
        amber:  '#C8853A',
        'amber-light': '#F0D9B8',
        teal:   '#2A7B6F',
        'teal-light': '#C4E0DA',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
