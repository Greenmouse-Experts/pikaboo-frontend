/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '01': "370px",
        '001': "470px",
        '02': "570px",
        '03': "1070px",
        '04': "85vh",
        '05': "80vh"
      },
      backgroundImage: {
        about: "url('https://res.cloudinary.com/dic7regoe/image/upload/v1685763261/sinechat/Testimonials_fpwvzz.png')",
        integration: "url('https://res.cloudinary.com/dic7regoe/image/upload/v1686119272/sinechat/Frame_3233207_djcf13.png')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      }
    },
  },
  plugins: [],
}
