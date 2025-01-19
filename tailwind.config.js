/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      theme: {
        extend: {
          screens: {
            '3xl': '2460px',
          },
        },
      },
  },
  plugins: [],
}