
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'patron-rosa': "url('/public/images/bg-rosa.jpg')",
        'patron-turquesa': "url('/public/images/bg-turquesa.jpg')",
        'patron-violeta': "url('/public/images/bg-violeta.jpg')",
        'footer-texture': "url('/public/images/bg-rosa-con-logo.jpg')",
      }
    },
    fontFamily :{ 
      poppins: ['Poppins', 'sans-serif'],
      merriweather: ['Merriweather', 'serif']
  },
  animation: {
    'switchBg': 'switchBg 1s linear',
  },
  keyframes: {
    switchBg: {
      '0%': { backgroundImage: "url('/public/images/bg-rosa.jpg')" },
      '50%': { backgroundImage: "url('/public/images/bg-violeta.jpg')" },
      '100%': { backgroundImage: "url('/public/images/bg-turquesa.jpg')" }
    }
  },
  screens: {
    'xs': {'min': '360px'},
    // => @media (min-width: 360px) { ... }
    
    'sm': {'min': '440px'},
    // => @media (min-width: 440px) { ... }

    'md': {'min': '768px'},
    // => @media (min-width: 768px) { ... }

    'lg': {'min': '1024px'},
    // => @media (min-width: 1024px) { ... }

    'xl': {'min': '1280px'},
    // => @media (min-width: 1280px) { ... }

    '2xl': {'min': '1536px'},
    // => @media (min-width: 1536px) { ... }
  },
  },
  plugins: [],
}