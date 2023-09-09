/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
        secondary: '#c74808',
        neutral: '#0077ae',
        accent: '#fbbd00',
        info: '#64c1c7',
      },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style, so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

module.exports = config;
