import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: {
          50: "#f0f7f4",
          100: "#dcede5",
          200: "#b9dbcb",
          300: "#8ec2a7",
          400: "#5fa37f",
          500: "#3d8562",
          600: "#2d6a4f",
          700: "#245540",
          800: "#1e4435",
          900: "#1a3a2d",
          950: "#0d2018",
        },
        turquoise: {
          50: "#f0fbff",
          100: "#e0f5fe",
          200: "#b9ecfd",
          300: "#7ce0fc",
          400: "#36d0f8",
          500: "#0cb8e9",
          600: "#0093c7",
          700: "#0176a1",
          800: "#066285",
          900: "#0a526e",
        },
        sand: {
          50: "#fdf8f0",
          100: "#f9eedc",
          200: "#f2dab9",
          300: "#e8c08c",
          400: "#dca05e",
          500: "#d4843a",
          600: "#c56c2f",
          700: "#a45428",
          800: "#844428",
          900: "#6b3923",
        },
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#d4a847",
          600: "#b8902f",
        },
        cream: "#faf8f3",
        "off-white": "#f5f0e8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
