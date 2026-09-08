import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Salvijas / piparmētru tonis no vizītkartes
        sage: {
          50: "#f4f8f5",
          100: "#e7f0ea",
          200: "#cfe1d5",
          300: "#a9c7b4",
          400: "#7ba68c",
          500: "#578069",
          600: "#436653",
          700: "#375344",
          800: "#2e4338",
          900: "#27382f",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#3d3d3d",
          muted: "#6b6b6b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1120px",
        },
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
} satisfies Config;
