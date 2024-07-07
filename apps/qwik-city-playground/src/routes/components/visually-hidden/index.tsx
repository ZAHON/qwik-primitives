import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [{ slug: 'example', label: 'Example' }];

export default component$(() => {
  return (
    <>
      <h1>Visually Hidden</h1>
      <p>Hides content from the screen in an accessible way.</p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/visually-hidden/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Visually Hidden | Qwik Primitives Astro Playground',
  meta: [
    {
      name: 'description',
      content: 'Hides content from the screen in an accessible way.',
    },
  ],
};
