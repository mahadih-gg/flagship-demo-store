/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
      },
      fontFamily: {
        "neue-plak": ["var(--font-neue-plak)", "sans-serif"],
        "neue-plak-text": ["var(--font-neue-plak-text)", "serif"],
      },
    },
  },
  plugins: [],
};
