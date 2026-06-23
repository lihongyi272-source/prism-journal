import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f3ea",
        ink: "#171614",
        muted: "#69645c",
        rule: "#d8d0c1",
        prism: "#7a2538",
        moss: "#53634d"
      },
      fontFamily: {
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Noto Serif SC",
          "Songti SC",
          "STSong",
          "serif"
        ],
        sans: [
          "Inter",
          "Avenir Next",
          "Noto Sans SC",
          "PingFang SC",
          "system-ui",
          "sans-serif"
        ]
      },
      maxWidth: {
        reading: "42rem",
        journal: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
