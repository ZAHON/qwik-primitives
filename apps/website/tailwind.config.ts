import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { createThemes } from 'tw-colors';

export default {
  content: ['./src/**/*.{astro,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    boxShadow: {
      1: 'var(--shadow-1)',
      2: 'var(--shadow-2)',
      3: 'var(--shadow-3)',
      4: 'var(--shadow-4)',
      5: 'var(--shadow-5)',
      6: 'var(--shadow-6)',
    },
    fontSize: {
      1: [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.0025em',
        },
      ],
      2: [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0em',
        },
      ],
      3: [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0em',
        },
      ],
      4: [
        '1.125rem',
        {
          lineHeight: '1.625rem',
          letterSpacing: '-0.0025em',
        },
      ],
      5: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.005em',
        },
      ],
      6: [
        '1.5rem',
        {
          lineHeight: '1.875rem',
          letterSpacing: '-0.00625em',
        },
      ],
      7: [
        '1.75rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-0.0075em',
        },
      ],
      8: [
        '2.1875rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '-0.01em',
        },
      ],
      9: [
        '3.75rem',
        {
          lineHeight: '3.75rem',
          letterSpacing: '-0.025em',
        },
      ],
    },
    lineHeight: {
      1: '1rem',
      2: '1.25rem',
      3: '1.5rem',
      4: '1.625rem',
      5: '1.75rem',
      6: '1.875rem',
      7: '2.25rem',
      8: '2.5rem',
      9: '3.75rem',
    },
    letterSpacing: {
      1: '0.0025em',
      2: '0em',
      3: '0em',
      4: '-0.0025em',
      5: '-0.005em',
      6: '-0.00625em',
      7: '-0.0075em',
      8: '-0.01em',
      9: '-0.025em',
      inherit: 'inherit',
    },
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
      },
      spacing: {
        '4.5': '1.125rem',
      },
      fontFamily: {
        sans: ['Geist Sans', ...fontFamily.sans],
        mono: ['Iosevka', ...fontFamily.mono],
      },
      keyframes: {
        'mobile-menu-content-show': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'mobile-menu-content-hide': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },

        'popper-content-side-top-show': {
          '0%': { translateY: '4px', scale: '0.97', opacity: '0' },
          '100%': { translateY: '0', scale: '1', opacity: '1' },
        },
        'popper-content-side-top-hide': {
          '0%': { translateY: '0', scale: '1', opacity: '1' },
          '100%': { translateY: '4px', scale: '0.97', opacity: '0' },
        },

        'popper-content-side-right-show': {
          '0%': { translateX: '-4px', scale: '0.97', opacity: '0' },
          '100%': { translateX: '0', scale: '1', opacity: '1' },
        },
        'popper-content-side-right-hide': {
          '0%': { translateX: '0', scale: '1', opacity: '1' },
          '100%': { translateX: '-4px', scale: '0.97', opacity: '0' },
        },

        'popper-content-side-bottom-show': {
          '0%': { translateY: '-4px', scale: '0.97', opacity: '0' },
          '100%': { translateY: '0', scale: '1', opacity: '1' },
        },
        'popper-content-side-bottom-hide': {
          '0%': { translateY: '0', scale: '1', opacity: '1' },
          '100%': { translateY: '-4px', scale: '0.97', opacity: '0' },
        },

        'popper-content-side-left-hide': {
          '0%': { translateX: '0', scale: '1', opacity: '1' },
          '100%': { translateX: '4px', scale: '0.97', opacity: '0' },
        },
        'popper-content-side-left-show': {
          '0%': { translateX: '4px', scale: '0.97', opacity: '0' },
          '100%': { translateX: '0', scale: '1', opacity: '1' },
        },
      },
      animation: {
        'mobile-menu-content-show': 'mobile-menu-content-show 160ms cubic-bezier(0.16, 1, 0.3, 1)',
        'mobile-menu-content-hide': 'mobile-menu-content-hide 100ms cubic-bezier(0.16, 1, 0.3, 1)',

        'popper-content-side-top-show': 'popper-content-side-top-show 160ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popper-content-side-top-hide': 'popper-content-side-top-hide 100ms cubic-bezier(0.16, 1, 0.3, 1)',

        'popper-content-side-right-show': 'popper-content-side-right-show 160ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popper-content-side-right-hide': 'popper-content-side-right-hide 100ms cubic-bezier(0.16, 1, 0.3, 1)',

        'popper-content-side-bottom-show': 'popper-content-side-bottom-show 160ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popper-content-side-bottom-hide': 'popper-content-side-bottom-hide 100ms cubic-bezier(0.16, 1, 0.3, 1)',

        'popper-content-side-left-show': 'popper-content-side-left-show 160ms cubic-bezier(0.16, 1, 0.3, 1)',
        'popper-content-side-left-hide': 'popper-content-side-left-hide 100ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    createThemes(
      {
        light: {
          background: '#FFFFFF',
          foreground: '#62636C',
          panel: '#FFFFFF',
          overlay: '#00000066',

          default: {
            1: '#FCFCFD',
            2: '#F9F9FB',
            3: '#EFF0F3',
            4: '#E7E8EC',
            5: '#E0E1E6',
            6: '#D8D9E0',
            7: '#CDCED7',
            8: '#B9BBC6',
            9: '#8B8D98',
            10: '#80828D',
            11: '#62636C',
            12: '#1E1F24',

            focus: '#B9BBC6',
            selection: '#0009321F',
            contrast: '#FFFFFF',
          },
          primary: {
            1: '#FDFCFF',
            2: '#FAF8FF',
            3: '#F5EEFF',
            4: '#EEE1FF',
            5: '#E6D4FF',
            6: '#DBC3FF',
            7: '#CCACFF',
            8: '#B98BFF',
            9: '#AC7EF4',
            10: '#A072E7',
            11: '#7747B8',
            12: '#40126F',

            focus: '#B98BFF',
            selection: '#6B01FF2B',
            contrast: '#FFFFFF',
          },
          success: {
            1: '#FBFEFB',
            2: '#F5FBF5',
            3: '#E9F6E9',
            4: '#DAF1DB',
            5: '#C9E8CA',
            6: '#B2DDB5',
            7: '#94CE9A',
            8: '#65BA74',
            9: '#46A758',
            10: '#3E9B4F',
            11: '#2A7E3B',
            12: '#203C25',

            focus: '#65BA74',
            selection: '#00930536',
            contrast: '#FFFFFF',
          },
          warning: {
            1: '#FDFDF9',
            2: '#FEFCE9',
            3: '#FFFAB8',
            4: '#FFF394',
            5: '#FFE770',
            6: '#F3D768',
            7: '#E4C767',
            8: '#D5AE39',
            9: '#FFE629',
            10: '#FFDC00',
            11: '#9E6C00',
            12: '#473B1F',

            focus: '#D5AE39',
            selection: '#FFD5008F',
            contrast: '#21201c',
          },
          danger: {
            1: '#FFFCFC',
            2: '#FFF7F7',
            3: '#FEEBEC',
            4: '#FFDBDC',
            5: '#FFCDCE',
            6: '#FDBDBE',
            7: '#F4A9AA',
            8: '#EB8E90',
            9: '#E5484D',
            10: '#DC3E42',
            11: '#CE2C31',
            12: '#641723',

            focus: '#EB8E90',
            selection: '#FF000632',
            contrast: '#FFFFFF',
          },
        },
        dark: {
          background: '#111111',
          foreground: '#B2B3BD',
          panel: '#19191B',
          overlay: '#00000099',

          default: {
            1: '#111113',
            2: '#19191B',
            3: '#222325',
            4: '#292A2E',
            5: '#303136',
            6: '#393A40',
            7: '#46484F',
            8: '#5F606A',
            9: '#6C6E79',
            10: '#797B86',
            11: '#B2B3BD',
            12: '#EEEEF0',

            focus: '#5F606A',
            selection: '#D7DDFD28',
            contrast: '#FFFFFF',
          },
          primary: {
            1: '#130F1A',
            2: '#1A1525',
            3: '#2B1E40',
            4: '#372455',
            5: '#412C62',
            6: '#4D3671',
            7: '#5E4487',
            8: '#7857AB',
            9: '#AC7EF4',
            10: '#A072E7',
            11: '#C6A1FF',
            12: '#E6DBFD',

            focus: '#7857AB',
            selection: '#9E61FF57',
            contrast: '#FFFFFF',
          },
          success: {
            1: '#0E1511',
            2: '#141A15',
            3: '#1B2A1E',
            4: '#1D3A24',
            5: '#25482D',
            6: '#2D5736',
            7: '#366740',
            8: '#3E7949',
            9: '#46A758',
            10: '#53B365',
            11: '#71D083',
            12: '#C2F0C2',

            focus: '#3E7949',
            selection: '#68FF8B3B',
            contrast: '#FFFFFF',
          },
          warning: {
            1: '#14120B',
            2: '#1B180F',
            3: '#2D2305',
            4: '#362B00',
            5: '#433500',
            6: '#524202',
            7: '#665417',
            8: '#836A21',
            9: '#FFE629',
            10: '#FFFF57',
            11: '#F5E147',
            12: '#F6EEB4',

            focus: '#836A21',
            selection: '#FEBB0036',
            contrast: '#21201c',
          },
          danger: {
            1: '#191111',
            2: '#201314',
            3: '#3B1219',
            4: '#500F1C',
            5: '#611623',
            6: '#72232D',
            7: '#8C333A',
            8: '#B54548',
            9: '#E5484D',
            10: '#EC5D5E',
            11: '#FF9592',
            12: '#FFD1D9',

            focus: '#B54548',
            selection: '#FF204756',
            contrast: '#FFFFFF',
          },
        },
      },
      {
        produceCssVariable: (colorName) => `--color-${colorName}`,
      }
    ),
  ],
} satisfies Config;
