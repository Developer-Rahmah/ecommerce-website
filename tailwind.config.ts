import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define colors based on Figma (Example approximation)
        primary: "#242424", // Dark color for text/buttons
        "star-yellow": "#FFC700", // Star rating color
        "text-muted": "#6B7280", // Lighter gray text
      },

      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
      screens: {
        // Define custom breakpoints if needed, or use Tailwind defaults:
        // sm: 640px (Mobile), md: 768px (Tablet), lg: 1024px (Desktop)
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
export default config;
