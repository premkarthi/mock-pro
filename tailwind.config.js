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