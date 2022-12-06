const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    // Font Size
    fontSize: {
      '11': ['11px', '13px'],
      '12': ['12px', '16px'],
      '13': ['13px', '14px'],
      '14': ['14px', '19px'],
      '15': ['15px', '20px'],
      '16': ['16px', '21px'],
      '19': ['19px', '24px'],
      '21': ['21px', '26px'],
      '24': ['24px', '28px'],
      '27': ['27px', '33px'],
      '33': ['33px', '40px'],
      '36': ['36px', '40px'],
      '40': ['40px', '47px'],
      '48': ['48px', '56px'],
      '56': ['56px', '62px'],
      '60': ['60px', '67px'],
      '100': ['100px', '111px'],
    },
    // SLB Colors 
    colors: {
      // Color Styles 
      primary: '#0014DC',
      'primary-dark': '#1E1464',
      'aqua-blue': '#00D2DC',
      'frost-blue-1': '#6E8CC8',
      'frost-blue-2': '#AFBEE1',
      white: '#fff',

      'slb':{
        // SLB Gray Color
        'gray': {
          50: '#FAFAFA',
          100: '#F0F0F0',
          150: '#F5F3F2',
          200: '#DC1E1',
          300: '#C8CDCD',
          400: '#AAAAA',
          500: '#707077',
          600: '#5b5b63',
          700: '#474750',
          800: '#32323C',
          900: '#1A1A1A',
        },
        // SLB Green Color
        'green': {
          50: '#F0FCEF',
          100: '#E1F9DF',
          200: '#D2F6CF',
          300: '#B4F0AF',
          400: '#8CDC8C',
          500: '#64CD6E',
          600: '#3CBE46',
          700: '#32A532',
          800: '#1E961E',
          900: '#198C19',
        },
        // SLB Blue Color
        'blue': {
          '50': '#F5F6FF',
          '100': '#E5E8FF',
          '200': '#B3B9FF',
          '300': '#808BFF',
          '400': '#4C5DFF',
          '500': '#1A2EFF',
          '600': '#0014DC',
          '700': '#0010B2',
          '800': '#000C80',
          '900': '#00074D'
        },
        // SLB Teal Color
        'teal': {
          50: '#EDFAF8',
          100: '#D2F3EE',
          200: '#B7EBE3',
          300: '#A5E6DC',
          400: '#82DCCD',
          500: '#50CDB4',
          600: '#00B996',
          700: '#00967D',
          800: '#00826E',
          900: '#056E5A',
        },
        // SLB Purple Color
        'purple': {
          50: '#F3EFFA',
          100: '#E7DFF5',
          200: '#CEC0EA',
          300: '#C2B0E5',
          400: '#A687D6',
          500: '#875EC7',
          600: '#6938BF',
          700: '#4F3D82',
          800: '#3D3378',
          900: '#292963',
        },
        // SLB Pink Color
        'pink': {
          50: '#FEEEFD',
          100: '#FDDDFB',
          200: '#FCC4F8',
          300: '#FAABF5',
          400: '#F58CEB',
          500: '#D659BF',
          600: '#CC248C',
          700: '#AB146B',
          800: '#A11463',
          900: '#871445',
        },
        // SLB Orange Color 
        'orange': {
          50: '#FDF2F0',
          100: '#FBE5E1',
          200: '#F7CCC4',
          300: '#FAABF5',
          400: '#EB9191',
          500: '#EB5E5E',
          600: '#F03D2E',
          700: '#DB381F',
          800: '#D11F1F',
          900: '#B50A0A',
        },
        // SLB Gray Text Color with Opacity (#1A1A1A)
        'gray-op': {
          10: 'rgba(26, 26, 26, 0.1)',
          20: 'rgba(26, 26, 26, 0.2)',
          30: 'rgba(26, 26, 26, 0.3)',
          40: 'rgba(26, 26, 26, 0.4)',
          50: 'rgba(26, 26, 26, 0.5)',
          60: 'rgba(26, 26, 26, 0.6)',
          70: 'rgba(26, 26, 26, 0.7)',
          80: 'rgba(26, 26, 26, 0.8)',
          90: 'rgba(26, 26, 26, 0.9)',
        },
        // Custom White Color with Opacity (#FFF)
        'white': {
          90: 'rgba(255, 255, 255, 0.9)',
          80: 'rgba(255, 255, 255, 0.8)',
          70: 'rgba(255, 255, 255, 0.7)',
          60: 'rgba(255, 255, 255, 0.6)',
          50: 'rgba(255, 255, 255, 0.5)',
          40: 'rgba(255, 255, 255, 0.4)',
          30: 'rgba(255, 255, 255, 0.3)',
          20: 'rgba(255, 255, 255, 0.2)',
          10: 'rgba(255, 255, 255, 0.1)',
        },        
        // SLB Black Color with Transparancy (#000)
        'black': {
          '10': 'rgba(0, 0, 0, 0.1)',
          '20': 'rgba(0, 0, 0, 0.2)',
          '30': 'rgba(0, 0, 0, 0.3)',
          '40': 'rgba(0, 0, 0, 0.4)',
          '50': 'rgba(0, 0, 0, 0.5)',
          '60': 'rgba(0, 0, 0, 0.6)',
          '70': 'rgba(0, 0, 0, 0.7)',
          '80': 'rgba(0, 0, 0, 0.8)',
          '90': 'rgba(0, 0, 0, 0.9)',
        },
      },
    },

    extend: {
      // backdrop Filter Blur
      backdropBlur: {
        '13': '13px',
        '25': '25px',
        '33': '33px',
        '65': '65px',
        '100': '100px',
      },
      // Z Index
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
      },
      // SLB Bg image Color Linear Gradient, 45 Angle, Opacity- 50,0,0,50
      backgroundImage: {
        'linear-glass85': 'linear-gradient(89.52deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.255) 100%)'
      },
      // SLB Shadow Effects
      boxShadow: {
        modal: '4px 4px 16px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      'xs': {'min': '375px'},
      // => @media (min-width: 375px) { ... }
      'sm': {'min': '414px'},
      // => @media (min-width: 414px) { ... }
      'md': {'min': '768px'},
      // => @media (min-width: 768px) { ... }
      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }
      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }
      '2xl': {'min': '1366px'},
      // => @media (min-width: 1366px) { ... }
      '3xl': {'min': '1440px'},
      // => @media (min-width: 1440px) { ... }
      '4xl': {'min': '1570px'},
      // => @media (min-width: 1570px) { ... }

      // Only For Mobile's and iPad media Classs, max width 767px and 1023
      'mb': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'ipad': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
        ".flex-dc": {
          display: "flex",
          "flex-direction": "column",
        },
        ".flex-dr": {
          display: "flex",
          "flex-direction": "row",
        },
        ".flex-ic": {
          display: "flex",
          "align-items": "center",
        },
        ".flex-jc": {
          display: "flex",
          "justify-content": "center",
        },
        ".flex-je": {
          display: "flex",
          "justify-content": "flex-end",
        },
        ".flex-js": {
          display: "flex",
          "justify-content": "flex-start",
        },
        ".flex-jb": {
          display: "flex",
          "justify-content": "space-between",
        },
        ".flex-ic-jb": {
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        },
        ".flex-ic-je": {
          display: "flex",
          "align-items": "center",
          "justify-content": "flex-end",
        },
        ".flex-ic-js": {
          display: "flex",
          "align-items": "center",
          "justify-content": "flex-start",
        },
        ".ellipsis": {
          overflow: "hidden",
          "white-space": "nowrap",
          "text-overflow": "ellipsis",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 16px rgba(0, 0, 0, 0.25)",
        },
        ".card-focus:focus-visible, .card-selected": {
          outline: `1px solid ${theme('colors.slb.blue.600')}`,
          "border-radius": "8px",
          background: "#fff",
        },
        ".hide-scroll-bar": {
          "&::-webkit-scrollbar": {
            "display": "none",
          }
        },
        ".nav-border": {
          "border-bottom": "1px solid #CECECE"
        },
        ".scrolling-touch": {
          "-webkit-overflow-scrolling": "touch"
        },
        ".slb-hidden": {
          "display": "none"
        },
        ".border-solid": {
          "border": "1px solid"
        }
      };
      addUtilities(newUtilities, ["responsive"]);
      const actionStatusProgress = {
        // action Status Progress
        '.default-progress': {
          'display': 'block',
          'background': 'rgba(26, 26, 26, 0.2)',
          'height': '6px',
          "width": '100%',
            '&:first-child': {
              'border-radius': '4px 0 0 4px',
            },
            '&:last-child': {
              'border-radius': '0 4px 4px 0',
            },
            // adding Responsiveness
            '@media (min-width: 1024px)': {
              'height': '8px',
            }
        },
        // action Status Progress complete state
        '.progress-complete': {
          'background': `${theme('colors.slb.blue.300')}`,
        },
        // action Status Progress active state
        '.progress-active': {
          'height': '8px',
          'background': `${theme('colors.slb.blue.600')}`,
          // adding Responsiveness
          '@media (min-width: 1024px)': {
            'height': '12px',
            'min-width': '87px'
          }
        },

        // action Status Progress complete state
        '.progress-complete-white': {
          'background-color': `${theme('colors.white')}`,
        },

        // action Status Progress complete state
        '.progress-active-blue': {
          'height': '12px',
          'background': "radial-gradient(104.06% 162.5% at 49.85% 181.25%, rgba(0, 210, 220, 0.6) 0%, rgba(0, 210, 220, 0) 100%), #FFFFFF",
        },
      };
      addUtilities(actionStatusProgress, ["responsive"]);
    }
  ],
};
