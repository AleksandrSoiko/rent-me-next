/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        black: "#444",
        blue: "#5774CD",
        blue1: "#F2FAFD",
        light_blue: "#D7E5FF",
        blueText: "#008ACE",
        black: "#000",
        orange: "#FFB22C",
        gray: "#444",
        grayBg: "rgba(255, 255, 255, 0.60)",
        borderBlue: "#D7E5FF",
        rose: "rgba(255, 229, 210, 0.63)",
        white: "#fff",
        light_blue_opacity: "rgba(215, 229, 255, 0.60)",
        light_red_opacity: "#ff8484",
      },
      fontFamily: {
        Comfortaa: [
          "Comfortaa/Comfortaa-Regular",
          "Comfortaa-Bold",
          "Comfortaa-Medium",
        ],
        Lato: ["Lato"],
        Manrope: ['url("/fonts/Montserrat-Regular.ttf")', "Manrope-Regular"],
        Montserrat: ["Montserrat"],
        Roboto: ["Roboto"],
        SourceSansPro: ["Source Sans Pro"],
        SFProText: ["SF Pro Text"],
        serif: ["Merriweather", "serif"],
      },
      background: {
        gradient:
          "linear-gradient(0deg, rgba(255, 229, 210, 0.63) 0.23%, rgba(255, 244, 229, 0.00) 99.77%);",
      },
      btnHoverOrange: {
        background: "#FFB22C",
        color: "#fff",
      },
      btnHoverOrangeReverse: {
        border: "1px solid #FFB22C",
        background: "#fff",
        color: "#000",
      },
    },
  },
  plugins: [],
};
