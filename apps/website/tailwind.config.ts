import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
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
      inherit: 'inherit',
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
      inherit: 'inherit',
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
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
      },
      fontFamily: {
        sans: ['Geist Sans', ...fontFamily.sans],
        mono: ['Geist Mono', ...fontFamily.mono],
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
      },
      animation: {
        'mobile-menu-content-show': 'mobile-menu-content-show 160ms cubic-bezier(0.16, 1, 0.3, 1)',
        'mobile-menu-content-hide': 'mobile-menu-content-hide 100ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
