/** @type {import('tailwindcss').Config} */
import daisyUi from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-img': "url('/login3.jpg')",
        'register-img': "url('/register.jpg')",
      }
    },
  },
  plugins: [daisyUi],
}

