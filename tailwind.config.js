module.exports = {
  purge: ['./server/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {
      backgroundImage: theme => ({
        hero: "url('server/public/images/wallpaper.jpeg')"
      })
    }
  },
  plugins: []
}
