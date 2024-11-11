import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './fonts.css?inline';

export const Fonts = component$(() => {
  useStyles$(styles);

  return (
    <>
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-400-normal.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-500-normal.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-700-normal.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/fontsource/fonts/geist-mono@latest/latin-400-normal.woff2"
      />
    </>
  );
});
