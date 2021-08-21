const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.purple.700'),
            a: {
              color: theme('colors.blue.800'),
              '&:hover': {
                color: theme('colors.green.1200')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.purple.300'),
            a: {
              color: theme('colors.red.600'),
              '&:hover': {
                color: theme('colors.red.600')
              },
              code: { color: theme('colors.red.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.purple.700'),
              color: theme('colors.purple.300')
            },
            'h2,h3,h4': {
              color: theme('colors.purple.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.purple.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.purple.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.purple.500') }
              }
            },
            strong: { color: theme('colors.purple.300') },
            thead: {
              color: theme('colors.purple.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.purple.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
