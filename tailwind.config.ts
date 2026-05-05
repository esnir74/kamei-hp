import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f1e8',
          100: '#ede3d2',
          200: '#dccdb8',
          300: '#c8b097',
          400: '#b09265',
          500: '#9B7A4E',
          600: '#8A6A43',
          700: '#7a5c38',
          800: '#69502f',
          900: '#52402a',
        },
        secondary: {
          50: '#FAF8F3',
          100: '#F7F3EA',
          200: '#E5DED2',
          300: '#d5c9b8',
          400: '#b5a695',
          500: '#6B6259',
          600: '#574f48',
          700: '#433d37',
          800: '#2D2A26',
          900: '#1F2933',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-noto-sans)',
          '"Noto Sans JP"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        serif: [
          'var(--font-noto-serif)',
          '"Noto Serif JP"',
          '"Yu Mincho"',
          'serif',
        ],
        display: [
          'var(--font-cormorant)',
          '"Cormorant Garamond"',
          '"Playfair Display"',
          'Georgia',
          'serif',
        ],
      },
    },
  },
  plugins: [typography],
};

export default config;
