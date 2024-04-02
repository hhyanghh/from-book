/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD0EC", // 핑크색, 주 포인트 색상
        secondary: "#474F7A", // 남색, 보조 색상
        accent: "#E14D2A", // 빨간색, 강조 색상
        gray: "#D9D9D9", // 기본 회색
      },
    },
  },
  plugins: [],
};
