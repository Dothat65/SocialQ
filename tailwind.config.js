/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dark: "#191a23",
        gray: {
          "100": "#898989",
          "200": "#292a32",
        },
        green: "#b9ff66",
        black: "#000",
        lightsteelblue: "#c8cbf3",
        grey: "#f3f3f3",
        midnightblue: "#11144c",
        cornflowerblue: "rgba(128, 133, 228, 0.43)",
      },
      spacing: {},
      fontFamily: {
        h2: "'Space Grotesk'",
      },
      borderRadius: {
        "26xl": "45px",
        sm: "14px",
        "6xs": "7px",
        "10xl": "29px",
      },
    },
    fontSize: {
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};