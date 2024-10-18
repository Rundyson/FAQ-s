/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#008542",
        yellow: "#DAA625",
        blue: "#3373E5",
        lightblue: "#3BBFEE",
      },
      fontFamily: {
        Raleway: "Raleway",
      },
    },
  },
  plugins: [],
};

