module.exports = {
  theme: {
    // Font Family 
    fontFamily: {
      'arial': 'Arial',
    },
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
      'frost-blue-1': '#6E8CC8',
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
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    extends: {
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
    function({ addComponents, theme }) {
      const buttons = {
        '.slb-btn': {
          'display': 'inline-block',
          'padding': '8px 24px',
          'font-weight': '700',
          'font-size': '14px',
          'transition': '150ms ease',
          '&:focus': {
            'outline': 'none',
          }
        },
        '.slb-btn-blue': {
          'background-color': theme('colors.slb.blue.600'),
          'color': '#fff',
          '&:hover': {
            'background-color': theme('colors.slb.blue.700'),
          }
        },
        '.slb-btn-white': {
          'background-color': '#fff',
          'color': '#A0A0A0',
          '&:hover': {
            'color': theme('colors.slb.blue.600'),
          }
        },
        '.slb-blue-outline': {
          'color': '#585858',
          'border': `1px solid ${theme('colors.slb.blue.600')}`,
          '&:hover': {
            'color': `${theme('colors.slb.blue.600')}`,
          }
        },
        '.slb-white-outline': {
          'color': '#fff',
          'border': '1px solid #fff',
          '&:hover': {
            'color': '#fff',
          }
        },
        '.slb-no-border': {
          'border-color': 'transparent',
        },
        '.slb-btn-xsm': {
          'padding': '6px 16px',
          "font-size": '10px',
        },
        '.slb-btn-sm': {
          'padding': '8px 24px',
          "font-size": '12px',
        },
        '.slb-btn-md': {
          'padding': '10px 32px',
          "font-size": '14px',
        },
        '.slb-btn-lg': {
          'padding': '12px 48px',
          "font-size": '16px',
        },
        '.slb-btn-xlg': {
          'padding': '16px 56px',
          "font-size": '18px',
        },
      };
      addComponents(buttons);

      const dropdownBtn = {
        '.slb-dropdown': {
          'position': 'absolute',
          'top': 'calc(100% + 12px)',
          'z-index': '1',
          'background': '#fff',
          'min-width': '160px',
          'width': 'max-content',
          'list-style': 'none',
          'border-radius': '8px',
          'filter': 'drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.15))',
          'max-height': '0',
          'overflow-y': 'auto',
          'transition': '300ms ease-in-out',
          'visibility': 'hidden',
          '&-item': {
            'font-size': '14px',
            'line-height': '18px',
            'display': 'block',
            'padding': '8px 24px',
            'font-weight': '400',
            'cursor': 'pointer',
            'white-space': 'nowrap',
            'color': '#585858',
            '&:hover':{
              'background': '#F0F5FF',
            },
            '&.active':{
              'background': '#F0F5FF',
              'font-weight': '700',
            },
            '&:empty':{
              'display': 'none',
            },
          }
        },
        '.slb-drop-btn': {
          'display': 'flex',
          'align-items': 'center',
          'font-weight': '700',
          'font-size': '14px',
          'line-height': '24px',
          'transition': '150ms ease',
          '@media (min-width: 1280px)': {
            'font-size': '18px',
          },
          '&:focus': {
            'outline': 'none',
          },
          '&-icon': {
            'font-size': '12px',
            'margin-left': '8px',
            'transition': '300ms ease-in-out',
          }
        },
        '.slb-drop-btn-blue': {
          'background-color': theme('colors.slb.blue.600'),
          'color': '#fff',
          '&:hover': {
            'background-color': theme('colors.slb.blue.700'),
          }
        },
        '.slb-drop-btn-white': {
          'background-color': 'rgba(255, 255, 255, 0.85)',
          'color': '#585858',
          '&:hover': {
            'background': '#fff',
          }
        },
        '.slb-drop-blue-outline': {
          'color': '#585858',
          'border': `1px solid ${theme('colors.slb.blue.600')}`,
          '&:hover': {
            'border': `1px solid ${theme('colors.slb.blue.700')}`,
          }
        },
        '.slb-drop-white-outline': {
          'color': '#fff',
          'border': '1px solid #fff',
          '&:hover': {
            'color': '#fff',
          }
        }
      };
      addComponents(dropdownBtn);
    }
  ],
};