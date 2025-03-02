/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nyanza': '#E7F3D8',
        'pistachio': '#B6DA8B',
        'yellow-green': '#8BC547',
        'avocado': '#588028',
        'dark-moss-green': '#354E18',
        'seasalt': '#FAFAFA',
        'platinum': '#E6E7E3',
        'ash-gray': '#C7CBC2',
        'reseda-green': '#808C73',
        'ebony': '#575B52',
        'black-olive': '#333630'
      },
    },
  },
  plugins: [],
}
