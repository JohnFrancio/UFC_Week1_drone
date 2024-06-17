/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        default: "url(./src/assets/drone.svg), default",
        pointer: "url(./src/assets/drone.svg), pointer",
      },
    },
  },
  plugins: [],
};
