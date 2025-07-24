const colors = require('tailwindcss/colors');

module.exports = {
  content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
      './public/index.html',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#FD2360',
            container: '#8F4953',
            on: '#FFFFFF',
            onContainer: '#561D26',
            fixed: '#FFB2BA',
            onFixed: '#561D26',
            fixedDim: '#FFB2BA',
          },
          secondary: {
            DEFAULT: '#CFDEEB',
            container: '#226488',
            on: '#FFFFFF',
            onContainer: '#00344C',
            fixed: '#93CDF6',
            onFixed: '#00344C',
            fixedDim: '#93CDF6',
          },
          tertiary: {
            DEFAULT: '#F05671',
            container: '#8F4952',
            on: '#FFFFFF',
            onContainer: '#561D26',
            fixed: '#FFB2B9',
            onFixed: '#561D26',
            fixedDim: '#FFB2B9',
          },
          error: {
            DEFAULT: '#A0000C',
            container: '#904A43',
            on: '#FFFFFF',
            onContainer: '#561E19',
            fixed: '#FFB4AB',
            onFixed: '#561E19',
            fixedDim: '#FFB4AB',
          },
          neutral: {
            DEFAULT: '#FFCED1',
            variant: '#FFE5E6',
            background: '#FFF8F7',
            onBackground: '#22191A',
            surface: '#FFF8F7',
            onSurface: '#22191A',
            container: '#F0DEDF',
            onContainer: '#22191A',
          },
          surface: {
            DEFAULT: '#FFF8F7',
            container: '#F0DEDF',
          },
          shadow: '#000000',
          scrim: '#000000',
          inverse: {
            surface: '#1A1112',
            onSurface: '#F0DEDF',
            primary: '#FFB2BA',
          },
        },
      },
    },
    plugins: [],
};