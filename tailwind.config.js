/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /scroll-mt-\[.*\]/,
      variants: ["", "md", "lg", "2xl", "3xl"],
    },
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        "albert-sans": ["Albert Sans", "sans-serif"],
        "noto-serif-jp": ["Noto Serif JP", "sans-serif"],
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
        "twk-lausanne": ["TWKLausanne", "sans-serif"],
        "neue-plak": ["Neue Plak", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      backgroundImage: {
        "restaurant-hero":
          "url('/assets/images/restaurant/restaurant-hero.webp')",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".pause": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
};
