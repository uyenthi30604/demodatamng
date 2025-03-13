/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        
        // 'dark-green': '#4D7111',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4D7111, #91EAAF)',
      },
      transform: {
        'translate-z-[100px]': 'translateZ(100px)',
      },

    },
  },
  plugins: [],
}

