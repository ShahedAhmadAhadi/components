/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      shadow: '0 0 0 2px #00000014'
    }
  },
  important: true,
  plugins: [],
  corePlugins: {
    preflight: false,
 }
}