module.exports = {
  // tree shaking code
  content: [ "./src/**/*.{html,js,jsx}" ],
  theme: {
    colors: {
      'white': '#ffffff',
      'plum': '#493843',
      'cream': '#e6e1c5',
      'pinky': '#ffbcd5',
      'greeny': '#68bbac',
      'greyish': '#bcafbd',
      'red': '#F87171',
      'orangey': '#ffa766',
      'featuretext': '#25a68e',
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
