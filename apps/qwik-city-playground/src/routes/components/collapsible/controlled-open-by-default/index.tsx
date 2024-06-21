import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Collapsible } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Collapsible</h1>
      <p>An interactive component which expands/collapses a panel.</p>

      <Collapsible.ControlledOpenByDefault />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Collapsible controlled open by default | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'An interactive component which expands/collapses a panel.',
    },
  ],
};
