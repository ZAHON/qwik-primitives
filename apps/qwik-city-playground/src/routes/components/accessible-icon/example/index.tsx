import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { AccessibleIcon } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Accessible Icon</h1>
      <p>Makes icons accessible by adding a label.</p>

      <AccessibleIcon.Example />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Accessible Icon example | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Makes icons accessible by adding a label.',
    },
  ],
};
