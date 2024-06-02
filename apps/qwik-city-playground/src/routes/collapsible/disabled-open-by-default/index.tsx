import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { DisabledOpenByDefault } from '@/demos/collapsible/disabled-open-by-default';

export default component$(() => {
  return (
    <>
      <Link href="/collapsible" prefetch={false}>
        <h1>Collapsible</h1>
      </Link>
      <p>An interactive component which expands/collapses a panel.</p>
      <DisabledOpenByDefault />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Collapsible disabled open by default | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'An interactive component which expands/collapses a panel.',
    },
  ],
};
