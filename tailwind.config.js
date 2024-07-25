/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", fontFamily.sans],
        poller: ["Poller One", fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
