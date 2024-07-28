import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bodoni: [
        '"bodoni", "sans-serif"'
      ],
      cabin: [
        '"cabin", "arial"'
      ],
      playfair: [
        '"playfair", "sans-serif"'
      ]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      'white': '#ffffff',
      'black': "#000000",
      "gray": {
        '200': "#F3F3F3",
        '400': "#F7F7F7",
        '500': "#F2F2F2",
        '600': "#868686",
        '700': "#9A9A9A",
        '800': "#4D4D4D",
        '900': "#242424",
        '1000': "#222224"
      },
      'brown': {
        '400': "#9B622F"
      }
    }
  },
  plugins: [],
};
export default config;
