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
        navy: {
          DEFAULT: "#0A1628",
          light: "#0d1f3a",
        },
        brand: {
          DEFAULT: "#8CC220",
          dark: "#78AB14",
        },
      },
    },
  },
  plugins: [],
};

export default config;
