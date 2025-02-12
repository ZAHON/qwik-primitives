import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontSize: {
      1: [
        'var(--font-size-1)',
        {
          lineHeight: 'var(--line-height-1)',
          letterSpacing: 'var(--letter-spacing-1)',
        },
      ],
      2: [
        'var(--font-size-2)',
        {
          lineHeight: 'var(--line-height-2)',
          letterSpacing: 'var(--letter-spacing-2)',
        },
      ],
      3: [
        'var(--font-size-3)',
        {
          lineHeight: 'var(--line-height-3)',
          letterSpacing: 'var(--letter-spacing-3)',
        },
      ],
      4: [
        'var(--font-size-4)',
        {
          lineHeight: 'var(--line-height-4)',
          letterSpacing: 'var(--letter-spacing-4)',
        },
      ],
      5: [
        'var(--font-size-5)',
        {
          lineHeight: 'var(--line-height-5)',
          letterSpacing: 'var(--letter-spacing-5)',
        },
      ],
      6: [
        'var(--font-size-6)',
        {
          lineHeight: 'var(--line-height-6)',
          letterSpacing: 'var(--letter-spacing-6)',
        },
      ],
      7: [
        'var(--font-size-7)',
        {
          lineHeight: 'var(--line-height-7)',
          letterSpacing: 'var(--letter-spacing-7)',
        },
      ],
      8: [
        'var(--font-size-8)',
        {
          lineHeight: 'var(--line-height-8)',
          letterSpacing: 'var(--letter-spacing-8)',
        },
      ],
      9: [
        'var(--font-size-9)',
        {
          lineHeight: 'var(--line-height-9)',
          letterSpacing: 'var(--letter-spacing-9)',
        },
      ],
      inherit: 'inherit',
    },
    lineHeight: {
      1: 'var(--line-height-1)',
      2: 'var(--line-height-2)',
      3: 'var(--line-height-3)',
      4: 'var(--line-height-4)',
      5: 'var(--line-height-5)',
      6: 'var(--line-height-6)',
      7: 'var(--line-height-7)',
      8: 'var(--line-height-8)',
      9: 'var(--line-height-9)',
      inherit: 'inherit',
    },
    letterSpacing: {
      1: 'var(--letter-spacing-1)',
      2: 'var(--letter-spacing-2)',
      3: 'var(--letter-spacing-3)',
      4: 'var(--letter-spacing-4)',
      5: 'var(--letter-spacing-5)',
      6: 'var(--letter-spacing-6)',
      7: 'var(--letter-spacing-7)',
      8: 'var(--letter-spacing-8)',
      9: 'var(--letter-spacing-9)',
      inherit: 'inherit',
    },
    boxShadow: {
      1: 'var(--shadow-1)',
      2: 'var(--shadow-2)',
      3: 'var(--shadow-3)',
      4: 'var(--shadow-4)',
      5: 'var(--shadow-5)',
      6: 'var(--shadow-6)',
      kbd: 'var(--shadow-kbd)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
      panel: 'var(--color-panel)',
      overlay: 'var(--color-overlay)',

      black: {
        alpha: {
          1: 'var( --color-black-alpha-1)',
          2: 'var( --color-black-alpha-2)',
          3: 'var( --color-black-alpha-3)',
          4: 'var( --color-black-alpha-4)',
          5: 'var( --color-black-alpha-5)',
          6: 'var( --color-black-alpha-6)',
          7: 'var( --color-black-alpha-7)',
          8: 'var( --color-black-alpha-8)',
          9: 'var( --color-black-alpha-9)',
          10: 'var( --color-black-alpha-10)',
          11: 'var( --color-black-alpha-11)',
          12: 'var( --color-black-alpha-12)',
        },
      },

      white: {
        alpha: {
          1: 'var(--color-white-alpha-1)',
          2: 'var(--color-white-alpha-2)',
          3: 'var(--color-white-alpha-3)',
          4: 'var(--color-white-alpha-4)',
          5: 'var(--color-white-alpha-5)',
          6: 'var(--color-white-alpha-6)',
          7: 'var(--color-white-alpha-7)',
          8: 'var(--color-white-alpha-8)',
          9: 'var(--color-white-alpha-9)',
          10: 'var(--color-white-alpha-10)',
          11: 'var(--color-white-alpha-11)',
          12: 'var(--color-white-alpha-12)',
        },
      },

      default: {
        focus: 'var(--color-default-focus)',
        selection: 'var(--color-default-selection)',
        contrast: 'var(--color-default-contrast)',

        solid: {
          1: 'var(--color-default-solid-1)',
          2: 'var(--color-default-solid-2)',
          3: 'var(--color-default-solid-3)',
          4: 'var(--color-default-solid-4)',
          5: 'var(--color-default-solid-5)',
          6: 'var(--color-default-solid-6)',
          7: 'var(--color-default-solid-7)',
          8: 'var(--color-default-solid-8)',
          9: 'var(--color-default-solid-9)',
          10: 'var(--color-default-solid-10)',
          11: 'var(--color-default-solid-11)',
          12: 'var(--color-default-solid-12)',
        },
        alpha: {
          1: 'var(--color-default-alpha-1)',
          2: 'var(--color-default-alpha-2)',
          3: 'var(--color-default-alpha-3)',
          4: 'var(--color-default-alpha-4)',
          5: 'var(--color-default-alpha-5)',
          6: 'var(--color-default-alpha-6)',
          7: 'var(--color-default-alpha-7)',
          8: 'var(--color-default-alpha-8)',
          9: 'var(--color-default-alpha-9)',
          10: 'var(--color-default-alpha-10)',
          11: 'var(--color-default-alpha-11)',
          12: 'var(--color-default-alpha-12)',
        },
      },

      primary: {
        focus: 'var(--color-primary-focus)',
        selection: 'var(--color-primary-selection)',
        contrast: 'var(--color-primary-contrast)',

        solid: {
          1: 'var(--color-primary-solid-1)',
          2: 'var(--color-primary-solid-2)',
          3: 'var(--color-primary-solid-3)',
          4: 'var(--color-primary-solid-4)',
          5: 'var(--color-primary-solid-5)',
          6: 'var(--color-primary-solid-6)',
          7: 'var(--color-primary-solid-7)',
          8: 'var(--color-primary-solid-8)',
          9: 'var(--color-primary-solid-9)',
          10: 'var(--color-primary-solid-10)',
          11: 'var(--color-primary-solid-11)',
          12: 'var(--color-primary-solid-12)',
        },
        alpha: {
          1: 'var(--color-primary-alpha-1)',
          2: 'var(--color-primary-alpha-2)',
          3: 'var(--color-primary-alpha-3)',
          4: 'var(--color-primary-alpha-4)',
          5: 'var(--color-primary-alpha-5)',
          6: 'var(--color-primary-alpha-6)',
          7: 'var(--color-primary-alpha-7)',
          8: 'var(--color-primary-alpha-8)',
          9: 'var(--color-primary-alpha-9)',
          10: 'var(--color-primary-alpha-10)',
          11: 'var(--color-primary-alpha-11)',
          12: 'var(--color-primary-alpha-12)',
        },
      },

      success: {
        focus: 'var(--color-success-focus)',
        selection: 'var(--color-success-selection)',
        contrast: 'var(--color-success-contrast)',

        solid: {
          1: 'var(--color-success-solid-1)',
          2: 'var(--color-success-solid-2)',
          3: 'var(--color-success-solid-3)',
          4: 'var(--color-success-solid-4)',
          5: 'var(--color-success-solid-5)',
          6: 'var(--color-success-solid-6)',
          7: 'var(--color-success-solid-7)',
          8: 'var(--color-success-solid-8)',
          9: 'var(--color-success-solid-9)',
          10: 'var(--color-success-solid-10)',
          11: 'var(--color-success-solid-11)',
          12: 'var(--color-success-solid-12)',
        },
        alpha: {
          1: 'var(--color-success-alpha-1)',
          2: 'var(--color-success-alpha-2)',
          3: 'var(--color-success-alpha-3)',
          4: 'var(--color-success-alpha-4)',
          5: 'var(--color-success-alpha-5)',
          6: 'var(--color-success-alpha-6)',
          7: 'var(--color-success-alpha-7)',
          8: 'var(--color-success-alpha-8)',
          9: 'var(--color-success-alpha-9)',
          10: 'var(--color-success-alpha-10)',
          11: 'var(--color-success-alpha-11)',
          12: 'var(--color-success-alpha-12)',
        },
      },

      warning: {
        focus: 'var(--color-warning-focus)',
        selection: 'var(--color-warning-selection)',
        contrast: 'var(--color-warning-contrast)',

        solid: {
          1: 'var(--color-warning-solid-1)',
          2: 'var(--color-warning-solid-2)',
          3: 'var(--color-warning-solid-3)',
          4: 'var(--color-warning-solid-4)',
          5: 'var(--color-warning-solid-5)',
          6: 'var(--color-warning-solid-6)',
          7: 'var(--color-warning-solid-7)',
          8: 'var(--color-warning-solid-8)',
          9: 'var(--color-warning-solid-9)',
          10: 'var(--color-warning-solid-10)',
          11: 'var(--color-warning-solid-11)',
          12: 'var(--color-warning-solid-12)',
        },
        alpha: {
          1: 'var(--color-warning-alpha-1)',
          2: 'var(--color-warning-alpha-2)',
          3: 'var(--color-warning-alpha-3)',
          4: 'var(--color-warning-alpha-4)',
          5: 'var(--color-warning-alpha-5)',
          6: 'var(--color-warning-alpha-6)',
          7: 'var(--color-warning-alpha-7)',
          8: 'var(--color-warning-alpha-8)',
          9: 'var(--color-warning-alpha-9)',
          10: 'var(--color-warning-alpha-10)',
          11: 'var(--color-warning-alpha-11)',
          12: 'var(--color-warning-alpha-12)',
        },
      },

      danger: {
        focus: 'var(--color-danger-focus)',
        selection: 'var(--color-danger-selection)',
        contrast: 'var(--color-danger-contrast)',

        solid: {
          1: 'var(--color-danger-solid-1)',
          2: 'var(--color-danger-solid-2)',
          3: 'var(--color-danger-solid-3)',
          4: 'var(--color-danger-solid-4)',
          5: 'var(--color-danger-solid-5)',
          6: 'var(--color-danger-solid-6)',
          7: 'var(--color-danger-solid-7)',
          8: 'var(--color-danger-solid-8)',
          9: 'var(--color-danger-solid-9)',
          10: 'var(--color-danger-solid-10)',
          11: 'var(--color-danger-solid-11)',
          12: 'var(--color-danger-solid-12)',
        },
        alpha: {
          1: 'var(--color-danger-alpha-1)',
          2: 'var(--color-danger-alpha-2)',
          3: 'var(--color-danger-alpha-3)',
          4: 'var(--color-danger-alpha-4)',
          5: 'var(--color-danger-alpha-5)',
          6: 'var(--color-danger-alpha-6)',
          7: 'var(--color-danger-alpha-7)',
          8: 'var(--color-danger-alpha-8)',
          9: 'var(--color-danger-alpha-9)',
          10: 'var(--color-danger-alpha-10)',
          11: 'var(--color-danger-alpha-11)',
          12: 'var(--color-danger-alpha-12)',
        },
      },
    },
    extend: {
      screens: {
        '2xl': '1400px',
        '3xl': '1536px',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
      },
      fontFamily: {
        sans: ['Geist Sans', 'Geist Sans Fallback', ...fontFamily.sans],
        mono: ['Geist Mono', 'Geist Mono Fallback', ...fontFamily.mono],
      },
      keyframes: {
        'mobile-menu-content-show': {
          '0%': { opacity: '0.8', transform: 'translate(0%, 110%)' },
          '100%': { opacity: '1', transform: 'translate(0%, 0%)' },
        },
        'mobile-menu-content-hide': {
          '0%': { opacity: '1', transform: 'translate(0%, 0%)' },
          '100%': { opacity: '0.8', transform: 'translate(0, 110%)' },
        },

        'code-presentation-spoiler-panel-down': {
          '0%': { height: 'var(--qwik-primitives-spoiler-panel-min-height)' },
          '100%': { height: 'var(--qwik-primitives-spoiler-panel-max-height)' },
        },

        'code-presentation-spoiler-panel-up': {
          '0%': { height: 'var(--qwik-primitives-spoiler-panel-max-height)' },
          '100%': { height: 'var(--qwik-primitives-spoiler-panel-min-height)' },
        },
      },
      animation: {
        'mobile-menu-content-show': 'mobile-menu-content-show 500ms cubic-bezier(0.32, 0.72, 0, 1)',
        'mobile-menu-content-hide': 'mobile-menu-content-hide 500ms cubic-bezier(0.32, 0.72, 0, 1)',

        'code-presentation-spoiler-panel-down': 'code-presentation-spoiler-panel-down 350ms cubic-bezier(0, 0, 0.2, 1)',
        'code-presentation-spoiler-panel-up': 'code-presentation-spoiler-panel-up 350ms cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
