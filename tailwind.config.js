/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jose: ["Josefin Sans", "sans-serif"],
        robo: ["Roboto", "sans-serif"],
        orbi: ["Orbitron"],
      },
    },
  },
  plugins: [],
};
