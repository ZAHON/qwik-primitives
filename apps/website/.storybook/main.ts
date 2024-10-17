import path from 'path';
import { StorybookConfig } from 'storybook-framework-qwik';

const config: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', 'storybook-dark-mode'],
  framework: { name: 'storybook-framework-qwik' },
  core: { renderer: 'storybook-framework-qwik' },
  stories: ['../src/**/*.stories.tsx'],
  docs: { autodocs: false },
  viteFinal: async (config: any) => config,
};

export default config;
