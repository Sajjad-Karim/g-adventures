/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#ffffff", // Main background color and text color
        secondary: "#f6f6fa", // Secondary background color for some container
        hover: "#e9eae9",
        blue: "#513393", // Buttons and Icons color
        "blue-text": "#4c4f56",
      },
      fontFamily: {
        "sans-sarif": '"DM Sans",sans-serif',
        montserrat: '"montserrat_regular",sans-serif',
        "dn-sanas": "'DM Sans'",
        text: '"Helvetica Neue",Arial,sans-serif',
      },
    },
  },
  plugins: [],
};
