module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#71bb02', // Custom name for your color
        'diyYellow': '#f1e6c3',
        'diyBlack': '#42433e',
        'diyPink': '#e8cbb3',
        'diyBrown': '#988f7b',
        'diyGray': '#dce2db',
        'diyPurple': '#d5cbc2',
        'diyLightYellow':'#f9f4ef'

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('daisyui')
  ],
};
