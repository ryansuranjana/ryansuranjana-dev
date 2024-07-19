import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
      keyframes: {
        "bounce-back-from-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-25px)",
          },
          "60%": {
            opacity: "1",
            transform: "translateY(2px)",
          },
          "80%": {
            transform: "-1px",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "bounce-back-from-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(25px)",
          },
          "60%": {
            opacity: "1",
            transform: "translateY(-2px)",
          },
          "80%": {
            transform: "1px",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "bounce-back-from-top": "bounce-back-from-top 1.1s ease 100ms",
        "bounce-back-from-bottom": "bounce-back-from-bottom 1.1s ease",
      },
    },
  },
  plugins: [],
};
export default config;
