/** @type {import('tailwindcss').Config} */

const gray = {
  0: "var(--gray-0)",
  100: "var(--gray-100)",
  200: "var(--gray-200)",
  300: "var(--gray-300)",
  400: "var(--gray-400)",
  500: "var(--gray-500)",
  600: "var(--gray-600)",
  700: "var(--gray-700)",
  800: "var(--gray-800)",
  850: "var(--gray-850)",
  900: "var(--gray-900)",
  1000: "var(--gray-1000)",
  1100: "var(--gray-1100)",
};

const colorSystem = {
  "color-brands": "var(--color-brands)",
  "neutral-bg": "var(--neutral-bg)",
  "dark-neutral-bg": "var(--dark-neutral-bg)",
  "dark-neutral-border": "var(--dark-neutral-border)",
  "gray-dark-0": "var(--dark-gray-0)",
  "gray-dark-100": "var(--dark-gray-100)",
  "gray-dark-200": "var(--dark-gray-200)",
  "gray-dark-300": "var(--dark-gray-300)",
  "gray-dark-400": "var(--dark-gray-400)",
  "gray-dark-500": "var(--dark-gray-500)",
  "gray-dark-600": "var(--dark-gray-600)",
  "gray-dark-700": "var(--dark-gray-700)",
  "gray-dark-800": "var(--dark-gray-800)",
  "gray-dark-850": "var(--dark-gray-850)",
  "gray-dark-900": "var(--dark-gray-900)",
  "gray-dark-1000": "var(--dark-gray-1000)",
  "gray-dark-1100": "var(--dark-gray-1100)",
};

const colorAccent = {
  blue: "var(--blue-accent)",
  green: "var(--green-accent)",
  violet: "var(--violet-accent)",
  orange: "var(--orange-accent)",
  yellow: "var(--yellow-accent)",
  indigo: "var(--indigo-accent)",
  emerald: "var(--emerald-accent)",
  fuchsia: "var(--fuchsia-accent)",
  red: "var(--red-accent)",
  sky: "var(--sky-accent)",
  pink: "var(--pink-accent)",
  neutral: "var(--neutral-accent)",
};

const typography = {
  "header-1": ["40px", "60px"],
  "header-2": ["32px", "39px"],
  "header-3": ["28px", "34px"],
  "header-4": ["28px", "34px"],
  "header-5": ["24px", "30px"],
  "header-6": ["20px", "18px"],
  "header-7": ["18px", "22px"],
  normal: ["14px", "16px"],
  subtitle: ["16px", "16px"],
  "subtitle-semibold": ["16px", "20px"],
  "btn-label": ["16px", "16px"],
  "mini-btn-label": ["14px", "12px"],
  desc: ["12px", "16px"],
  "mini-desc": ["9px", "11px"],
};

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen: {
        xs: "500px",
      },
      backgroundImage: {},
      backgroundSize: {},
      colors: {
        gray,
        ...colorAccent,
        ...colorSystem,
      },
      fontSize: {
        ...typography,
      },
      fontFamily: {
        inter: "Inter",
      },
      keyframes: {},
      animation: {},
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
