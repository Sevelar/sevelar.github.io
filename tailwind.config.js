/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('../public/img/background.jpg')",
      },
      backgroundColor: {
        darkmask: "rgba(0, 0, 0, 0.8)",
        "new-blurple": "#7289DA",
        "old-blurple": "#5E6EA8",
        astron: "#333333",
      },
      fontFamily: {
        saira: "Saira",
        sans: ["Nunito"],
      },
      fontSize: {
        "5xl": "54px",
      },
    },
  },
  plugins: [],
};
