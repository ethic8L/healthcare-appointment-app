/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./lib/**/*.{js,ts,jsx,tsx}", // include lib folder (e.g. lib/utils.js from shadcn)
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#0D7DFF", // Indigo-600 by default (can be changed)
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#64748b", // Slate-500
            foreground: "#ffffff",
          },
        },
        borderRadius: {
          lg: "0.75rem",
          xl: "1rem",
          "2xl": "1.5rem",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };
  