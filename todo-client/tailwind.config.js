/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          600: 'rgba(255,0,92,0.25)',
          700: 'rgba(255,0,92,0.50)',
          800: 'rgba(255,0,92,0.75)',
          900: 'rgba(255,0,92,1)',
        },
        green: {
          600: 'rgba(0,181,136,0.25)',
          700: 'rgba(0,181,136,0.50)',
          800: 'rgba(0,181,136,0.75)',
          900: 'rgba(24,220,177,1)',
        },
        onyx: '#0E0E2C',
        slate: '#4A4A68',
        'light-slate': '#8C8CA2',
        gold: '#DBAF3E',
        'ftue-yellow': '#FFCB44',
        notification: '#DC0030',
        cloud: 'rgba(239,239,239,0.9)',
        spacer: 'rgba(112, 112, 112, 0.5)',
        semitrasp: 'rgba(0, 0, 0, 0.04)',
        newonyx: '#141414',
        newslate: '#707070',
        icegray: '#E4E9ED',
        creamsicle: '#EFB521',
        eggshell: '#F9FAFB',
        hgray: '#8F8F8F',
        socialbtnborder: 'rgba(140, 140, 162, 0.2)',
        placeholdergray: '#D9D9D9',
        versuspink: '#FF00D6',
        buygreen: '#00b588',
      },
      spacing: {
        18: '4.5rem',
        22: '5.625rem',
      },
      fontFamily: {
        nunitos: ['Nunito Sans', 'sans-serif'],
      },
      screens: {
        // Mobile Half: widget styling
        mh: { raw: '(max-width: 320px)' },
        // Medium
        sm: '500px',
        md: '600px',
        lg: '720px',
        // Desktop full
        df: '800px',
      },
    },
  },
  plugins: [],
};
