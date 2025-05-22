/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(238, 242, 255)',
          100: 'rgb(224, 231, 255)',
          200: 'rgb(199, 210, 254)',
          300: 'rgb(165, 180, 252)',
          400: 'rgb(129, 140, 248)',
          500: 'rgb(99, 102, 241)',
          600: 'rgb(79, 70, 229)',
          700: 'rgb(67, 56, 202)',
          800: 'rgb(55, 48, 163)',
          900: 'rgb(49, 46, 129)',
          950: 'rgb(30, 27, 75)',
        },
        secondary: {
          50: 'rgb(240, 253, 250)',
          100: 'rgb(204, 251, 241)',
          200: 'rgb(153, 246, 228)',
          300: 'rgb(94, 234, 212)',
          400: 'rgb(45, 212, 191)',
          500: 'rgb(20, 184, 166)',
          600: 'rgb(13, 148, 136)',
          700: 'rgb(15, 118, 110)',
          800: 'rgb(17, 94, 89)',
          900: 'rgb(19, 78, 74)',
          950: 'rgb(4, 47, 46)',
        },
        accent: {
          50: 'rgb(255, 247, 237)',
          100: 'rgb(255, 237, 213)',
          200: 'rgb(254, 215, 170)',
          300: 'rgb(253, 186, 116)',
          400: 'rgb(251, 146, 60)',
          500: 'rgb(249, 115, 22)',
          600: 'rgb(234, 88, 12)',
          700: 'rgb(194, 65, 12)',
          800: 'rgb(154, 52, 18)',
          900: 'rgb(124, 45, 18)',
          950: 'rgb(67, 20, 7)',
        },
      },
      boxShadow: {
        '3d': '10px 10px 0 rgba(0, 0, 0, 0.1)',
        'inner-glow': 'inset 0 0 10px rgba(79, 70, 229, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};