/** @type {import('tailwindcss').Config} */
module.exports = {
  // 어디에서 Tailwind를 사용할 것인지 알려준다.
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
