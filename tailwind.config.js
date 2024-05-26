/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'loginwidth': '422px',
      },
      height: {
        'loginheight': '526px',
      },
      colors:{
        "yellow":"#F3BE00",
        "primery":"#039ea2",
        inputBorder: '#9F9F9F',
        "lightblue":"#ADD8E6"
      },
      shadow: {
        light: '0px 0px 4px 0px #999999',
        dark: '0px 2px 2px 0px #00000040',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        'sm': '480px',
        'md': '890px',
      },
      fontSize:{
        nm: '9px'
      },
    },
  },
  plugins: [],
}

