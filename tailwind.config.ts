import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        base: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        },
        primary: {
          50: "#ecf5ff",
          100: "#d6e9ff",
          200: "#a8d1ff",
          300: "#75b5ff",
          400: "#4d9aff",
          500: "#1d7fff",
          600: "#005fe6",
          700: "#004ab4",
          800: "#003685",
          900: "#002459"
        }
      },
      boxShadow: {
        panel: "0 20px 45px rgba(15, 23, 42, 0.18)"
      },
      borderRadius: {
        "4xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
