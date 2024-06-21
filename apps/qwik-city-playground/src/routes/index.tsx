import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const componentsLinks = [{ slug: 'collapsible', label: 'Collapsible' }];

export default component$(() => {
  return (
    <>
      <h1>Qwik Primitives Qwik City Playground</h1>
      <p>The qwik city playground for Qwik Primitives.</p>

      <h2>Components</h2>
      <List.Root>
        {componentsLinks.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>

      <h2>Hooks</h2>

      <h2>Utilities</h2>
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
