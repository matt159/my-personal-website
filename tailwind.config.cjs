module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-purple': '#170827',
        'primary-orange': '#FFBC00'
      },
      rotate: {
        '135' : '135deg'
      }
    },
  },
  plugins: [],
}