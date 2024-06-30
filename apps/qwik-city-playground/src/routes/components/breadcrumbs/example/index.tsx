import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Breadcrumbs } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Breadcrumbs</h1>
      <p>Show hierarchy and navigational context for a user`s location within an application.</p>

      <Breadcrumbs.Example />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Breadcrumbs example | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Show hierarchy and navigational context for a user`s location within an application.',
    },
  ],
};
