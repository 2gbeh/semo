import APP from "./utils/constants/APP";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f4f7fe',
        icon: '#a0aec0',
        // 
        brand: APP.color.brand,
        "brand-tint": APP.color.brand_tint,
        "brand-shade": APP.color.brand_shade,
        "brand-light": APP.color.brand_light,
        "brand-dark": APP.color.brand_dark,
        //
        accent: APP.color.accent,
        "accent-tint": APP.color.accent_tint,
        "accent-shade": APP.color.accent_shade,
        "accent-light": APP.color.accent_light,
        "accent-dark": APP.color.accent_dark,
      },
    },
  },
  plugins: [],
};
