/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      variants: {
        extend: {
          opacity: ["disabled"],
        },
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "500px" },
        xm: { max: "495px" },

        // => @media (max-width: 479px) { ... }
        xxs: { max: "300px" },
      },
      color: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9",
      }, // 80,230,217
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fff 5px,#fff 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
      },
    },
  },
  plugins: [],
};
