/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wwhite: '#FFFFFF33',
        orange: '#FFBD96',
        purple: '#8C6BAE',
      },
    },
  },
  plugins: [],
}
