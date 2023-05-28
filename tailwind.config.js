/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#525252",
          200: "#27272A",
          300: "#18181B",
          content: "#D4D4D8",
        },
      },
    },
  },
  plugins: [],
};
