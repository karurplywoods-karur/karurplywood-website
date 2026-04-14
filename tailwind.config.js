/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          DEFAULT: '#C8884A',
          light: '#E0A86A',
          pale: '#F5E6CC',
          deep: '#8B5E2A',
        },
        bg: {
          DEFAULT: '#0E0B08',
          2: '#161009',
        },
        surface: {
          DEFAULT: '#1C140D',
          2: '#241A10',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
