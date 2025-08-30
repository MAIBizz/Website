/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          bg: "#0b0f14",
          text: "#E5E7EB",
          primary: "#0EA5E9",   // MAI blue
          accent: "#FBBF24",    // warm accent
          card: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.08)",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
