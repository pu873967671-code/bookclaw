import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2EA',
        ink: {
          DEFAULT: '#1A1814',
          60: 'rgba(26,24,20,0.6)',
          30: 'rgba(26,24,20,0.3)',
          10: 'rgba(26,24,20,0.08)',
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
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s var(--ease-out) both',
        'fade-in': 'fadeIn 1.2s var(--ease-out) both',
        'slide-down': 'slideDown 0.7s var(--ease-out) both',
        'float-card': 'floatCard 6s ease-in-out infinite',
        'wave': 'wave 1.2s ease-in-out infinite',
        'badge-float-1': 'badgeFloat1 5s ease-in-out infinite',
        'badge-float-2': 'badgeFloat2 5.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
