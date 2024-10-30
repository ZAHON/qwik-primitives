import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{ts,tsx}'],
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
        'collapsible-panel-down': {
          '0%': { opacity: '0', gridTemplateRows: '0fr' },
          '100%': { opacity: '1', gridTemplateRows: '1fr' },
        },
        'collapsible-panel-up': {
          '0%': { opacity: '1', gridTemplateRows: '1fr' },
          '100%': { opacity: '0', gridTemplateRows: '0fr' },
        },

        'spoiler-panel-down': {
          '0%': { height: 'var(--qwik-primitives-spoiler-panel-min-height)' },
          '100%': { height: 'var(--qwik-primitives-spoiler-panel-max-height)' },
        },
        'spoiler-panel-up': {
          '0%': { height: 'var(--qwik-primitives-spoiler-panel-max-height)' },
          '100%': { height: 'var(--qwik-primitives-spoiler-panel-min-height)' },
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
        'collapsible-panel-down': 'collapsible-panel-down 350ms cubic-bezier(0, 0, 0.2, 1)',
        'collapsible-panel-up': 'collapsible-panel-up 350ms cubic-bezier(0, 0, 0.2, 1)',

        'spoiler-panel-down': 'spoiler-panel-down 350ms cubic-bezier(0, 0, 0.2, 1)',
        'spoiler-panel-up': 'spoiler-panel-up 350ms cubic-bezier(0, 0, 0.2, 1)',

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
  plugins: [],
} satisfies Config;
