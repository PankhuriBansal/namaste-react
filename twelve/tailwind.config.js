/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: [
    //need to tell what files will be using the tailwind class - all our component files 
    "./src/**/*.{html,js}"      //all files having .js,.html,.jsx or ts or tsx files in src folder 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
