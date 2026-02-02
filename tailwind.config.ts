import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e7f7fb",
          100: "#c5eef7",
          200: "#9ae2f1",
          300: "#6cd3ea",
          400: "#44c3e2",
          500: "#19b1d8",
          600: "#1091b6",
          700: "#0f7591",
          800: "#125d72",
          900: "#134c5b"
        },
        leaf: {
          100: "#d7f3e3",
          300: "#7dd9a6",
          500: "#2fb36c",
          700: "#1e8c55"
        }
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(17, 74, 90, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
