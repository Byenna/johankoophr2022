/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': [
          '"Dancing+Script"',
          'cursive',
          
        ],
        'montserrat': [
          'Montserrat',
          'sans-serif',
         
        ],
    },
    fontSize: {
      'Kooph1': ['2rem', { lineHeight: '2' }],//32
      'Kooph2': ['1.75rem', { lineHeight: '1' }],//28
      'Kooph3': ['1.5rem', { lineHeight: '1' }],//24px
      'Kooph-p': ['1rem', { lineHeight: '1.4rem' }],//16px
    },
  },
  },
  plugins: [], 
}
