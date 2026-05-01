import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f15a24",
        "primary-dark": "#d44a1a",
        dark: "#0c1525",
        "dark-2": "#111e35",
        "navy-900": "#0c1525",
        "navy-800": "#111e35",
        "slate-gray": "#5e6d82",
        muted: "#5e6d82",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        nexa: ["NexaRustSlab", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease forwards",
        marquee: "marquee 20s linear infinite",
        "slow-spin": "slow-spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
