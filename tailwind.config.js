/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'futuristic': '0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 0%, rgba(0,0,0,1) 100%)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

