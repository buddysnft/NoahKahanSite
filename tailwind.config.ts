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
        forest: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#b9dccb',
          300: '#8dc4ab',
          400: '#5fa688',
          500: '#3e8a6d',
          600: '#2d6e56',
          700: '#245846',
          800: '#1e4739',
          900: '#1a3b30',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#ebe4d7',
          400: '#dfd3bf',
          500: '#d1c0a3',
          600: '#b8a382',
          700: '#998463',
          800: '#7d6c52',
          900: '#665846',
        },
      },
    },
  },
  plugins: [],
};
export default config;
