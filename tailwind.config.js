/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: [
        'first-flip-card',
        'z-30',
        'z-20',
        'z-10',
        '-top-4',
        '-right-1',
        '-top-8',
        ' -left-4',
      ],
    },
    // defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  darkMode: 'class', // 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          50: '#a8fdd2',
          100: '#76e0aa',
          200: '#38e18c',
          300: '#13cb6e',
          400: '#03b059',
          500: '#0a8647',
        },
        secondary: {
          50: '#6B7790',
          100: '#4C5C7C',
          200: '#394969',
          300: '#293651',
          400: '#192641',
          500: '#0B162E',
        },
        neutral: {
          100: '#FBFBFB',
          200: '#EEEEEE',
          300: '#D3D3D3',
          400: '#929292',
          500: '#777777',
          600: '#5F5F5F',
          700: '#494949',
          800: '#2C2C2C',
        },
        font: {
          'white': '#F8F8F8',
          'black': '#333333',
        },
        'light-blue': '#f9fbfe',
        'medium-blue': '#E5EEFD',
        'light': '#FDFDFD',
        'dark': '#222222',
        'dark-gray': '#313131',
        'medium-gray': '#464646',
      },
      lineHeight: {
        0: '0rem',
      },
      boxShadow: {
        'blue': '3px 4px 12px rgba(45, 156, 219, 0.25)',
        'dark-gray': '3px 4px 12px rgba(73, 73, 73, 0.25)',
      },
      spacing: {
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
      },
      fontSize: {
        '2xs': ['0.615rem', { lineHeight: '0.75rem' }],
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    backgroundColor: ({ after }) => after(['disabled', 'active']),
    textColor: ({ after }) => after(['active']),
    borderColor: ({ after }) => after(['active']),
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
