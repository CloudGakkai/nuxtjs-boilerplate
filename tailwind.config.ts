/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#48A8FF",
        "primary-600": "#2E99FE",
      },
      flex: {
        "2": "2 2 0%",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
};
