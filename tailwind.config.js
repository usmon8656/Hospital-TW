 
 
 
 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-blue': '#0099FF',
        'h-color': '#333333',
        'p-color': '#999999',
        'bg_blue': '#D7F1F657',
      },
      backgroundImage: {
        'bg1': "url('./src/img/sec3_1.png')",
        'bg2': "url('/img/Mask group 2.png')",
        'bg3': "url('/img/Mask group 3.png')",
        'bg4': "url('/img/Mask group 4.png')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}