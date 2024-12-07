/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5bafeb",
        secondary: "#92caf2",
      },
      boxShadow: {
        custom: "0 10px 25px rgba(91, 175, 235, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
