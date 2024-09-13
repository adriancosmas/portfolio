// ./tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        gantari: ["Gantari", "sans-serif"],
      },
      animation: {
        'fade-in-up': 'fadeInUp .3s ease-out',
        'zoom-out': 'zoomOut .3s ease-in-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(1)',
          },
          '50%':{
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        zoomOut: {
          '0%': {
            transform: 'scale(2)',
            opacity: '0'
          },
          '100%':{
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
    },
  },
  plugins: [],
};