/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9395D3",      
          "secondary": "#A2A3BB",
          "accent": "#0000ff",
          "neutral": "#000d0b",
          "base-100": "#fefcff",
          "info": "#2ac5ff",
          "success": "#00a000",
          "warning": "#ff7a00",
          "error": "#ff9595",
        },
      },
    ],
  },
  theme: {
    extend: {},
  }
}

