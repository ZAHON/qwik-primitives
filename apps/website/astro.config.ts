// @ts-check
import { defineConfig } from 'astro/config';

import qwikdev from '@qwikdev/astro';
import tailwind from '@astrojs/tailwind';
import AutoImport from 'astro-auto-import';
import mdx from '@astrojs/mdx';

import { cssVariablesTheme } from './src/shiki/css-variables-theme';
import { codeToPreCode } from './src/shiki/transformers/code-to-pre-code';
import { removeLineClassAttribute } from './src/shiki/transformers/remove-line-class-attribute';
import { metaHighlight } from './src/shiki/transformers/meta-highlight';
import { metaWordHighlight } from './src/shiki/transformers/meta-word-highlight';

export default defineConfig({
  trailingSlash: 'never',
  integrations: [
    qwikdev(),
    tailwind(),
    AutoImport({
      imports: [
        {
          './src/components/page-hgroup': ['PageHgroup'],
        },
      ],
    }),
    mdx({
      shikiConfig: {
        theme: cssVariablesTheme,
        transformers: [codeToPreCode(), removeLineClassAttribute(), metaHighlight(), metaWordHighlight()],
      },
    }),
  ],
});
