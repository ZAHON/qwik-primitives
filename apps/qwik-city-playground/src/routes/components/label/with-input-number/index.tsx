import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Label } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Label</h1>
      <p>Renders an accessible label associated with controls.</p>

      <Label.WithInputNumber />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Label with input number | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Renders an accessible label associated with controls.',
    },
  ],
};
