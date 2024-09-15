/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff", // Main background color and text color
        "secondary": "#f6f6fa", // Secondary background color for some container
        "blue": "#513393", // Buttons and Icons color
        "blue-text": "4c4f56",
      },
    },
  },
  plugins: [],
};
