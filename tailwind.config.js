/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["corporate", "black"],
  },
  // theme: {
  //   extend: {},
  // },
  plugins: [require("daisyui")],
}
