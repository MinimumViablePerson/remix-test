import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { dirname, join } from 'path';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts'
      }
    }
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      define: {
        'process.env.STORYBOOK': JSON.stringify(true),
      },
      resolve: {
        alias: {
          '~': join(dirname(dirname(__filename)), 'app')
        }
      }
    });
  }
};

export default config;