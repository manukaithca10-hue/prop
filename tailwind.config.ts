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
        background: "#0B0B0B",
        foreground: "#F5F5F7",
        gold: {
          50: "#FAF6EB",
          100: "#F3EBD0",
          200: "#E5D4A2",
          300: "#D7BD73",
          400: "#C8A96A", // Primary luxury gold
          500: "#B8964F",
          600: "#987739",
          700: "#755928",
          800: "#533D1A",
          900: "#34250E",
        },
        dark: {
          100: "#1A1A1A",
          200: "#141414",
          300: "#0F0F0F",
          400: "#0B0B0B",
          500: "#070707",
        },
        accent: {
          gold: "#C8A96A",
          metallic: "#D4AF37",
          bronze: "#A38048",
        }
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 20px rgba(200, 169, 106, 0.15)',
        'gold-glow': '0 0 25px rgba(200, 169, 106, 0.3)',
        'gold-glow-lg': '0 0 50px rgba(200, 169, 106, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C8A96A 0%, #D4AF37 50%, #8A6D2C 100%)',
        'gradient-dark-gold': 'linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(11,11,11,0.95) 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(200, 169, 106, 0.2) 50%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 10px rgba(200, 169, 106, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(200, 169, 106, 0.7))' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
