const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: { 
      screens: {
       'min-lg': '1100px',
        'min-xl': '1250px',
      },
      colors: {
        "primary-red": "#ea0027", // Custom primary color (blue-800)
        "secondary-red": "#b4001e", // Custom secondary color (orange)
        "primary-gray": "#0e0e0e", // Custom dark mode color
        "secondary-gray": "#F5F5F5", // Custom light background
        'white': '#ffffff',
        'black': '#000000',
      },
    },
    fontFamily: {
      poppins: [
        'Poppins',
        'sans-serif'
      ],
      bebas: [
        'Bebas Neue',
        'cursive'
      ],
      
    },
  },
  plugins: [],
};

export default config;
