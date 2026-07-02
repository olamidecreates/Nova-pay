import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          950: "#050B1F", // near-black navy, dark mode base
          900: "#0A1230", // primary deep blue
          800: "#0F1B45",
          700: "#152459",
          600: "#1C2F72",
          500: "#2A3F8F", // mid blue
          400: "#3D5CFF", // electric accent
          300: "#7C93FF",
          100: "#E7ECFF",
          50: "#F6F8FF",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C77E",
        },
        ink: "#0A1230",
        paper: "#FFFFFF",
        mist: "#F7F8FC",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(10,18,48,0.35)",
        soft: "0 2px 10px rgba(10,18,48,0.06)",
      },
      backgroundImage: {
        "nova-gradient":
          "linear-gradient(135deg, #0A1230 0%, #152459 45%, #2A3F8F 100%)",
        "card-sheen":
          "linear-gradient(115deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
