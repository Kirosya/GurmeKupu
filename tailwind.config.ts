import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gourmet: {
          bg: '#0c0a09',
          card: '#1c1917',
          cardHover: '#262626',
          border: '#292524',
          gold: '#d97706',
          goldLight: '#f59e0b',
          accent: '#b45309',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
