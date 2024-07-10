/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        primary :"#F0F0F2" ,
        secondary:"#191919"
    },
    container: {
      center: true,
      padding: {
        DEFAULT:"1rem",
        sm: "3rem",
        
      }
    }
  },
},
  plugins: [],
}

