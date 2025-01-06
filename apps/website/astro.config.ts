// @ts-check
import { defineConfig } from 'astro/config';

import qwikdev from '@qwikdev/astro';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import AutoImport from 'astro-auto-import';
import mdx from '@astrojs/mdx';

export default defineConfig({
  trailingSlash: 'never',
  integrations: [qwikdev(), tailwind(), icon(), AutoImport({ imports: [] }), mdx()],
});
