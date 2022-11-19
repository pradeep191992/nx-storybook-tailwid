module.exports = {
  theme: {
    colors: {
      primary: {
        light: '#5eead4',
        DEFAULT: '#14b8a6',
        dark: '#0f766e',
      },
      secondary: {
        light: '#bae6fd',
        DEFAULT: '#0ea5e9',
        dark: '#0369a1',
      },
      white: '#ffffff',
      black: '#000000',
      'slb':{
        // SLB Black Color with Transparancy
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
        // SLB Gray Color
        'gray': {
          50: '#FAFAFA',
          100: '#F3F3F3',
          150: '#F5F3F2',
          200: '#E6E6E6',
          300: '#CECECE',
          400: '#A0A0A0',
          500: '#717171',
          600: '#585858',
          700: '#444444',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
        // SLB Blue Color
        'blue': {
          '50': '#F0F5FF',
          '100': '#A9B1FF',
          '200': '#808CFF',
          '300': '#5767FF',
          '400': '#2F42FF',
          '500': '#061CFF',
          '600': '#0014DC',
          '700': '#000FA4',
          '800': '#000A6C',
          '900': '#000534'
        },
        // SLB Light Blue Color
        'light-blue': {
          50: '#F0F5FF',
          100: '#CADDFF',
          200: '#AFCDFF',
          300: '#94BCFF',
          400: '#79ABFF',
          500: '#5F9BFF',
          600: '#2979FF',
          700: '#1F5BBF',
          800: '#153C80',
          900: '#0F2D60',
        },
        // SLB Orange Color
        'orange': {
          50: '#FFEDDF',
          100: '#FFDBBF',
          200: '#FFC99F',
          300: '#FFB680',
          400: '#FFA460',
          500: '#FF9240',
          600: '#FF6E00',
          700: '#DF6000',
          800: '#BF5200',
          900: '#9F4500',
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
        }
      },
    },
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
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
          'background': `${theme('colors.slb.blue.600')}`,
          'color': '#fff',
          '&:hover': {
            'background': `${theme('colors.slb.blue.700')}`,
          }
        },
        '.slb-btn-white': {
          'background': '#fff',
          'color': '#A0A0A0',
          '&:hover': {
            'color': `${theme('colors.slb.blue.600')}`,
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
          'background': `${theme('colors.slb.blue.600')}`,
          'color': '#fff',
          '&:hover': {
            'background': `${theme('colors.slb.blue.700')}`,
          }
        },
        '.slb-drop-btn-white': {
          'background': 'rgba(255, 255, 255, 0.85)',
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