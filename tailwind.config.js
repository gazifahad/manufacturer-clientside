module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
       // and some pre-defined theme
      
      
      "light", "dark", "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
  ],

}
