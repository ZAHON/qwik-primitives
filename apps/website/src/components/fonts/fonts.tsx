import { component$, useStyles$ } from '@builder.io/qwik';

export const Fonts = component$(() => {
  useStyles$(`
		@font-face {
			font-family: 'Geist Sans';
			font-style: normal;
			font-display: swap;
			font-weight: 400;
			src: url(https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-400-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-400-normal.woff) format('woff');
		}

		@font-face {
			font-family: 'Geist Sans';
			font-style: normal;
			font-display: swap;
			font-weight: 500;
			src: url(https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-500-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-500-normal.woff) format('woff');
		}

		@font-face {
			font-family: 'Geist Sans';
			font-style: normal;
			font-display: swap;
			font-weight: 700;
			src: url(https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-700-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@latest/latin-700-normal.woff) format('woff');
		}

		/* geist-mono-latin-400-normal */
		@font-face {
			font-family: 'Geist Mono';
			font-style: normal;
			font-display: swap;
			font-weight: 400;
			src: url(https://cdn.jsdelivr.net/fontsource/fonts/geist-mono@latest/latin-400-normal.woff2) format('woff2'), url(https://cdn.jsdelivr.net/fontsource/fonts/geist-mono@latest/latin-400-normal.woff) format('woff');
		}
	`);

  return <></>;
});
