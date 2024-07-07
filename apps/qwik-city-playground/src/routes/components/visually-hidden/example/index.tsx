import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { VisuallyHidden } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Visually Hidden</h1>
      <p>Hides content from the screen in an accessible way.</p>

      <VisuallyHidden.Example />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Visually Hidden example | Qwik Primitives Astro Playground',
  meta: [
    {
      name: 'description',
      content: 'Hides content from the screen in an accessible way.',
    },
  ],
};
