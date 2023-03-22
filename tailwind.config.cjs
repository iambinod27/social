/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#0D1321",
      secondary: "#1D2D44",
      s_primary: "#3E5C76",
      s_secondary: "#748CAB",
    },
  },
  plugins: [require("flowbite/plugin")],
};
