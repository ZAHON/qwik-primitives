import { StorybookConfig } from 'storybook-framework-qwik';

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', 'storybook-dark-mode'],
  framework: {
    name: 'storybook-framework-qwik',
  },
  core: {
    renderer: 'storybook-framework-qwik',
  },
  stories: ['../src/**/*.stories.tsx'],
  viteFinal: async (config: any) => {
    return config;
  },
  docs: {
    autodocs: false,
  },
};

export default config;
