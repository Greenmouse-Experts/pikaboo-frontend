/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/src/utils/withMT');
module.exports = withMT({
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
        login: "linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1687358576/pikaboo/Rectangle_19529_sjhlfa.png')",
        login2: "linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1687358577/pikaboo/Rectangle_19531_ews6zl.png')",
        login3: "linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1687358576/pikaboo/Rectangle_19530_jzxtac.png')",
        waste: "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1687450763/pikaboo/waste2_zpl64s.jpg')",
        about: "url('https://res.cloudinary.com/dic7regoe/image/upload/v1685763261/sinechat/Testimonials_fpwvzz.png')",
        integration: "url('https://res.cloudinary.com/dic7regoe/image/upload/v1686119272/sinechat/Frame_3233207_djcf13.png')",
        field: "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1687970640/pikaboo/waste4_bur1f9.webp')",
        waste1: "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1687970640/pikaboo/waste5_akt4wf.webp')",
        fleet: "linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.4)),url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1687970531/pikaboo/waste3_gzl51i.jpg')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      }
    },
  },
  plugins: [],
})
