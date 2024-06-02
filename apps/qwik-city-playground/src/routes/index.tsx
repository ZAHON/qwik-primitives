import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export const head: DocumentHead = {
  title: 'Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'The qwik city playground for Qwik Primitives.',
    },
  ],
};

export default component$(() => {
  return (
    <>
      <h1>Qwik Primitives Qwik City Playground</h1>
      <p>The qwik city playground for Qwik Primitives.</p>
      <div style="display: flex; flex-direction: column; row-gap: 0.5rem;"></div>
    </>
  );
});
