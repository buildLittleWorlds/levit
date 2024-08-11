/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'global-image': "url('/src/assets/global-image1.jpeg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}