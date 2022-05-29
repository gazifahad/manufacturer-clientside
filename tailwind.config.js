module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        'mytheme': { // custom theme
          'primary' : '#7f75ae',
          'primary-focus' : '#31c127',
          'bg' :'#31c127',
          'primary-content' : '#ffff00',
          // other colors
        },
        'myothertheme': { // custom theme
          'primary' : '#ffff00',
          'primary-focus' : '#ffff00',
          'primary-content' : '#ffff00',
          // other colors
        },
      },
      '', // and some pre-defined theme
      'forest',
      'synthwave'
    ],
  },
  plugins: [
    require('daisyui'),
  ],

}
