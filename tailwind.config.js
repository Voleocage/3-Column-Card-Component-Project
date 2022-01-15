module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      BigSh: "'Big Shoulders Display', cursive",
      Deca: "'Lexend Deca', sans-serif",
    },
    extend: {
      colors: {
        primary: {
          10: 'hsl(31, 77%, 52%)',
          20: 'hsl(184, 100%, 22%)',
          30: 'hsl(179, 100%, 13%)',
          40: 'hsla(0, 0%, 100%, 0.75)',
          50: 'hsl(0, 0%, 95%)',
        },
      },
    },
  },
  plugins: [],
}
