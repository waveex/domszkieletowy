module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '404': '404px',
        '384': '384px',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
     },
    colors: {
      "background": "#100c08"
    },
    extend: {
      /*backgroundImage: theme => ({
        'hero-pattern': "url('../images/header.jpg')",

       })*/
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
