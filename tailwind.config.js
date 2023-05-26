/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "hsl(24, 96.8%, 51.0%)",
        "tanish": "hsl(60, 28.0%, 95.1%)",
      }
    },
  },
  plugins: [],
}