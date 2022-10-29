/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
   
      screens : {
        sm : '576px',
        md : '768px',
        lg : '992px',
        xl : '1200px',
      },
      container : {
        center : true,
        padding : '1rem' // 16px
      },
    
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
      'Kooph1': ['2rem', { lineHeight: '1.2' }],//32
      'Kooph2': ['1.75rem', { lineHeight: '1' }],//28
      'Kooph3': ['1.5rem', { lineHeight: '1' }],//24px
      'Kooph-p': ['1rem', { lineHeight: '1.4rem' }],//16px
    },
    colors : {
      'primary' : '#9b9db7',
      'secondary' : '#044cac',
      'tertiary' : '#5b7eb8',
      'primary-light' : '#dde7f4',
      
    },
  },
  },
  plugins: [], 
}
