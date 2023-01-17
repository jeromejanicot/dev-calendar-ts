/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1/7": "14%",
      },
      padding: {
        "20%": "20%",
        "50%": "50%",
      },
      inset: {
        "50%": "50%",
      },
      translate: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
