

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'patron-rosa': "url('/public/bg-rosa.jpg')",
        'patron-turquesa': "url('/public/bg-turquesa.jpg')",
        'patron-violeta': "url('/public/bg-violeta.jpg')",
        'footer-texture': "url('/public/bg-rosa-con-logo.jpg')",
      }
    },
    fontFamily :{ 
      righteous: ["Righteous", "sans-serif"], 
      sourceSans: ["Source Sans 3", "sans-serif"],
      pop: ["pop","sans"], 
  },
  screens: {
    'sm': {'max': '440px'},
    // => @media (min-width: 640px) { ... }

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