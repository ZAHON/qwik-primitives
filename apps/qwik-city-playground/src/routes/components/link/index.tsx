import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [
  { slug: 'example', label: 'Example' },
  { slug: 'disabled', label: 'Disabled' },
  { slug: 'external', label: 'External' },
];

export default component$(() => {
  return (
    <>
      <h1>Link</h1>
      <p>Semantic element for navigation between pages.</p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/link/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Link | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Semantic element for navigation between pages.',
    },
  ],
};
