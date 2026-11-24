/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F2E0",
        "light-cream": "#FAF8EE",
        sage: "#EDF5ED",
        forest: {
          DEFAULT: "#1B6523",
          dark: "#144E1A",
        },
        gold: {
          DEFAULT: "#F3C11A",
          dark: "#D9A60E",
        },
        leaf: "#52A633",
        charcoal: "#1C1917",
        slate: {
          500: "#57534E",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 50px rgba(49, 39, 27, 0.08)",
      },
    },
  },
  plugins: [],
};
