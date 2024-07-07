

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'patron-rosa': "url('bg-rosa.jpg')",
        'patron-turquesa': "url('bg-turquesa.jpg')",
        'patron-violeta': "url('bg-violeta.jpg')",
        'footer-texture': "url('bg-rosa-con-logo.jpg')",
      }
    },
    fontFamily :{ 
      righteous: ["Righteous", "sans-serif"], 
      sourceSans: ["Source-Sans-3", "sans-serif"],
      pop: ["pop","sans"], 
  },
  animation: {
    'switchBg': 'switchBg 1s linear',
  },
  keyframes: {
    switchBg: {
      '0%': { backgroundImage: "url('bg-rosa.jpg')" },
      '50%': { backgroundImage: "url('bg-violeta.jpg')" },
      '100%': { backgroundImage: "url('bg-turquesa.jpg')" }
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