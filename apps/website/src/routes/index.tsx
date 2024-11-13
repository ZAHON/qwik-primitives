import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: 'Qwik Primitives',
  meta: [
    {
      name: 'description',
      content: `Unstyled, accessible components for building high-quality design systems and web apps in Qwik.`,
    },
  ],
};
