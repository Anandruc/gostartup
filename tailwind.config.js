module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      heading: "'Lexend', sans-serif",
      body: "'Inter', sans-serif",
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      primary: '#4A6CF7',
      'dark-text': '#79808A',
      dark: '#111722',
      stroke: '#e5e7eb',
    },
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1140px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      screens: {
        xs: '500px',
      },
      backgroundImage: {
        'noise-pattern': "url('../images/NoisePattern.svg')",
      },
      dropShadow: {
        light: 'drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))',
      },
    },
  },
  plugins: [],
};
