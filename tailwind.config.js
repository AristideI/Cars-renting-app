/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: 'Lora',
      sans: 'Inter-regular',
      mono: 'Inter-bold',
      serifItalic: 'Lora-italic',
    },
    extend: {
      colors: {
        primary: {
          50: '#7FE1D4', // Lightest teal
          100: '#49C7B9', // Light teal
          150: '#269B90', // Medium teal
          200: '#0E635A', // Dark teal
        },
        secondary: {
          50: '#F9FAFB', // Light gray
          100: '#C9CDD3', // Medium gray
        },
        success: {
          50: '#E5F995', // Lighter green
          100: '#A8E23D', // Medium green
        },
        warning: {
          50: '#FF9980', // Lighter red
          100: '#FF4D47', // Medium red
        },
      },
    },
  },
  plugins: [],
}
