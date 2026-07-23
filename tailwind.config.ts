import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FAFAFC",
        muted: "#A0A0B0",
        gold: {
          50:  "#FBF8F0",
          100: "#F5EDCE",
          200: "#EBD9A0",
          300: "#DFC472",
          400: "#D4B778", // Primary luxury gold — warmer & brighter
          500: "#BEA060",
          600: "#9E8248",
          700: "#7A6134",
          800: "#574422",
          900: "#352912",
        },
        dark: {
          100: "#1E1E22",
          200: "#16161A",
          300: "#101014",
          400: "#0A0A0A",
          500: "#060608",
        },
        accent: {
          gold:     "#D4B778",
          metallic: "#E5CD99",
          bronze:   "#A88A50",
        },
      },
      fontFamily: {
        heading:   ["Bricolage Grotesque", "sans-serif"],
        body:      ["Outfit", "sans-serif"],
        serif:     ["Cormorant Garamond", "serif"],
        // Keep legacy aliases so existing className usage still resolves
        playfair:  ["Cormorant Garamond", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        sans:      ["Outfit", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      boxShadow: {
        luxury:       "0 20px 50px rgba(0,0,0,0.85), 0 0 22px rgba(212,183,120,0.18)",
        "gold-glow":  "0 0 28px rgba(212,183,120,0.35)",
        "gold-glow-lg":"0 0 55px rgba(212,183,120,0.50)",
        glass:        "0 8px 32px 0 rgba(0,0,0,0.40)",
      },
      backgroundImage: {
        "gradient-gold":      "linear-gradient(135deg,#D4B778 0%,#E5CD99 50%,#9E8248 100%)",
        "gradient-dark-gold": "linear-gradient(180deg,rgba(22,22,26,0.92) 0%,rgba(10,10,10,0.97) 100%)",
        "gold-shimmer":       "linear-gradient(90deg,transparent 0%,rgba(212,183,120,0.22) 50%,transparent 100%)",
      },
      animation: {
        float:       "float 6s ease-in-out infinite",
        "pulse-glow":"pulseGlow 3s infinite ease-in-out",
        shimmer:     "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity:"0.65", filter:"drop-shadow(0 0 10px rgba(212,183,120,0.32))" },
          "50%":     { opacity:"1",    filter:"drop-shadow(0 0 28px rgba(212,183,120,0.75))" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
