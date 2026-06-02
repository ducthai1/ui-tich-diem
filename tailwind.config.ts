import type { Config } from "tailwindcss";

// Design tokens extracted from the Empos POS Figma file (loyalty/tích điểm screens).
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00664B",
          hover: "#008661",
          active: "#007350",
          light: "#B0E9DA",
          lighter: "#CFFFF0",
          surface: "#ECFFF8",
          accent: "#119C72",
        },
        ink: {
          DEFAULT: "#0D1017",
          strong: "#35313C",
          muted: "#61646B",
          subtle: "#756F80",
          faint: "#5F5A6A",
        },
        line: {
          DEFAULT: "#E7E7E8",
          strong: "#D2CDDB",
        },
        info: {
          DEFAULT: "#1D7AFC",
          surface: "#E5F4FF",
          surfaceStrong: "#CDEAFF",
        },
        danger: "#DC220D",
        canvas: "#F0F0F4",
        topbar: "#1376BE",
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        dropdown: "0px 6px 16px -4px rgba(0, 0, 0, 0.1)",
        card: "0px 1px 2px rgba(16, 24, 40, 0.06)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
