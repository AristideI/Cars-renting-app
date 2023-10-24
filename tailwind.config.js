/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#111827', //dark blue for the nav bar
        primaryBlue: '#265E78', // main color for all the backgrounds
        mainBlue: '#3E7591', // gradient used on  car cards and menu option
        lightBlue: '#64A1C0', // color used for the inputs
        lightGray: '#F9FAFB', // will serve as white
        darkGray: '#C9CDD3', // disabled buttons
        lightGreen: '#F8FCAD', //color used at forgot password, login, sign up
        darkGreen: '#EBF541', // color used at Booking accepted
        lightOrange: '#FFC28A', //used for delete button, errors
      },
      fontFamily: {
        lora: 'Lora',
        interRegular: 'Inter-regular',
        interBold: 'Inter-bold',
        loraItalic: 'Lora-italic',
      },
    },
  },
  plugins: [],
}
