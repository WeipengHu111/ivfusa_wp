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
        'diyLightYellow': '#f9f4ef',
        'diyLightBrown': '#ba7264',
        'diyPeach': '#ffebe1',
        'diyDarkBrown': '#783124'
      },
      screens: {
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
        '2xl': '1536px', // 2x Extra large screens
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('daisyui')
  ],
};
