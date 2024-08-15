import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Dialog } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Dialog</h1>
      <p>
        A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
      </p>

      <Dialog.Uncontrolled />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Dialog uncontrolled | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content:
        'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
    },
  ],
};
