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
          50: '#64A1C0',
          100: '#3E7591',
          150: '#265E78',
          200: '#111827',
        },
        secondary: {
          50: '#F9FAFB',
          100: '#C9CDD3',
        },
        success: {
          50: '#F8FCAD',
          100: '#EBF541',
        },
        warning: {
          50: '#FFC28A',
          100: '#FF7A38',
        },
      },
    },
  },
  plugins: [],
}
