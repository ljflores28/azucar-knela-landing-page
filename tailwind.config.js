

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
  }
  },
  plugins: [],
}