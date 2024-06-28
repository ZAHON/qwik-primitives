import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Link</h1>
      <p>Semantic element for navigation between pages.</p>

      <Link.Disabled />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Link disabled | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Semantic element for navigation between pages.',
    },
  ],
};
