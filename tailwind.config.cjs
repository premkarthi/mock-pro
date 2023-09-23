/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#00AEEF',
      'secondary': '#FFC20E',
      'lightBg': '#F2F7FD',
      'white': '#ffffff',
      'lightBlock': '#666666'
    },
    screens: {
      sm: '768px',
      md: '900px',
      lg: '1050px',
      xl: '1400px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.4rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '300',
        },
        '.btn-primary': {
          backgroundColor: '#00AEEF',
          color: '#fff',
          '&:hover': {
            opacity: '0.8'
          },
        },
        '.btn-normal':{
          backgroundColor: 'transparent',
          border: '1px solid #495057',
          color: '#221122',
          '&:hover': {
            color: '#fff',
            backgroundColor: '#00AEEF',
            borderColor: '#00AEEF',
          },
        },
        '.btn-secondary': {
          backgroundColor: '#FFC20E',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
        '.btn-transparent': {
          backgroundColor: 'transparent',
          border: '1px solid #FFC20E',
          color: '#FFC20E',
          '&:hover': {
            backgroundColor: '#FFC20E',
            color: 'white',
          },
        },
      })
    })
  ]
}