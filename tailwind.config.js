/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: ["active"],
      colors: {
        base: {
          300: "#F7F9FB",
          400: "#f5f8f7",
        },
        chalk: {
          100: "rgba(28, 28, 28, 0.05)",
          400: "rgba(28, 28, 28, 0.4)",
        },
        divider: {
          300: "rgba(28, 28, 28, 0.1)",
        },
        tertiary: {
          200: "#F9FEF0",
        },
        sky: {
          300: "#DBE6F2",
        },
      },
      padding: {
        nav: "4px 8px 4px 4px",
      },
    },
  },
  plugins: [],
};
