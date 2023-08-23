/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,html}"];
export const theme = {
  container: {
    center: true,

    width: 'full'
  },

  extend: {},
};
export const plugins = [require("@tailwindcss/forms")];

