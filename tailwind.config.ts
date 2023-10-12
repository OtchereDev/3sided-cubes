import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": "#A0FF1F",
        "primary-pink": "#F70087",
        "secondary-green": "#00ED71",
        "secondary-pink": "#F40256",
        "grey-dark": "#5B5B5B",
        "grey-mid": "#C3C3C3",
        "grey-light": "#F8F8F8",
      },
      fontFamily: {
        primary: "'Poppins', sans-serif;",
        secondary: "'Anonymous Pro', monospace;",
      },
      boxShadow: {
        light: "0px 1px 10px 0px #1A1A1914;",
        strong: "0px 2px 10px 0px #1A1A193D;",
      },
    },
  },
  plugins: [],
};
export default config;
