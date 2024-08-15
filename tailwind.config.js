/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 8s infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      borderRadius: { 40: "40px" },
      boxShadow: { "3xl": "0px 10px 30px 0px rgba(0, 0, 0, 0.15)" },
      screens: {
        desktop: "1450px",
        tablet: "960px",
      },
      colors: {
        green: "#4BC15E",
        "light-green": "#E4F6E7",
        "green-hover": "#3c9a4b",
        white: "#FFFFFF",
        black: "#0C0C0C",
        grey: "#A1A1AA",
        "light-grey": "#E4E4E7",
        "input-grey": "#F4F4F5",
      },
      fontSize: {
        h1: ["30px", { lineHeight: "36px", fontWeight: "800" }],
        h2: ["22px", { lineHeight: "30px", fontWeight: "700" }],
        display: ["14px", { lineHeight: "20px" }],
        "body-large": ["16px", { lineHeight: "22px" }],
        label: [
          "12px",
          { lineHeight: "20px", letterSpacing: "1px", fontWeight: "800" },
        ],
        "label-mobile": [
          "8px",
          { lineHeight: "12px", letterSpacing: "1px", fontWeight: "400" },
        ],
      },
      fontFamily: {
        inter: " , sans-serif",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
