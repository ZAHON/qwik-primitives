import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

export default component$(() => {
  return (
    <>
      <h1>Qwik Primitives Qwik City Playground</h1>
      <p>The qwik city playground for Qwik Primitives.</p>

      <List.Root>
        <List.Item>
          <Link href="/collapsible">Collapsible</Link>
        </List.Item>
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'The qwik city playground for Qwik Primitives.',
    },
  ],
};
