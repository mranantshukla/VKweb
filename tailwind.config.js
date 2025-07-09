/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          800: '#0b0b0f',
          900: '#040406',
        },
        orange: {
          500: '#f53b00',
          600: '#ff6433',
        },
        red: {
          500: '#f53b00',
          600: '#ff6433',
        }
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      }
    },
  },
  plugins: [],
};