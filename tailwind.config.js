/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {

    container: {
      center: true,
      
      width: 'full'
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}

