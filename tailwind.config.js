/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "brand": "#090580",
        "main": "#46458C",
        "text-1": "#E8A9A9",
        "text-2": "#F4D3D3"
      }
    },
  },
  plugins: [],
}

