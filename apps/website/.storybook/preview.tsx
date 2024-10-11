import { Parameters } from 'storybook-framework-qwik';
import { themes } from '@storybook/theming';
import '../src/styles/globals.css';

export const parameters: Parameters = {
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    stylePreview: true,
    dark: {
      ...themes.dark,
    },
    light: {
      ...themes.normal,
    },
  },
  actions: {
    disable: true,
  },
  a11y: {
    config: {},
    options: {
      checks: {
        'color-contrast': {
          options: { noScroll: true },
        },
      },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: '200px',
  },
};
