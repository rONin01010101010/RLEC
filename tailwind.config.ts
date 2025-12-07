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
        primary: {
          DEFAULT: "#1E3A5F", // Navy - authority
          light: "#2A4F7D",   // Light navy
          dark: "#152A45",    // Dark navy
          50: "#E8EDF4",
          100: "#D1DBE9",
        },
        secondary: {
          DEFAULT: "#4FB3BF", // Teal - approachability
          light: "#6DC4CF",   // Light teal
          dark: "#3A8B95",    // Dark teal
          50: "#E9F6F8",
          100: "#D3EDF1",
        },
        accent: {
          coral: "#FF6B6B",   // Coral - important CTAs
          orange: "#FF9F1C",  // Orange
          mint: "#2DD4BF",    // Mint
          lime: "#84CC16",    // Lime
          rose: "#FB7185",    // Rose
        },
        neutral: {
          background: "#F4F7F9", // Light blue-gray
          light: "#F8FAFC",      // Light gray
          warm: "#FDF4E3",       // Warm beige
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #1E3A5F 0%, #2A4F7D 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #4FB3BF 0%, #6DC4CF 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FF9F1C 0%, #FF6B6B 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
