/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenDark:'#B31312',
        lightGreen: "#FFDD83",
        dashboardBg: '#F5F5F5',
        dashboardBgSecondary: '#FEFEFE',
        dashboardBgDark: '#171717',
        dashboardBgSecondaryDark: '#1D1D1D',
        dashboardBorderColor:'#e4e4e4'
        
      },
      boxShadow: {
        'myShaow': '5px 5px 10px 0px rgba(0, 0, 0, 0.1), -3px -3px 10px 0px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
};