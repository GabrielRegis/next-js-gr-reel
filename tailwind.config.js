const { createThemes } = require('tw-colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    createThemes({
      light: {
        'primary': "#00c3ff",
        // 'primary': "#0022ff",
        'secondary': "#fc6603",
        'tertiary': "#ff0080",
        'background': "white",
        'on-background': '#0d1f26',
        'secondary-background': "#dbecff"
      },
      dark: {
        'primary': "#ff0080",
        'secondary': "#fc6603",
        'tertiary': "#ff0080",
        'background': "black",
        'on-background': 'white',
        'secondary-background': "#010408"
      }
    }),
    require("tailwindcss-animate"),
  ],
}
