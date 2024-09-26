// @ts-check
import { defineConfig } from 'astro/config';

import qwikdev from '@qwikdev/astro';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [qwikdev(), tailwind(), icon(), mdx()],
});
