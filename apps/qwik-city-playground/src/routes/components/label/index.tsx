import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [
  { slug: 'with-wrapping-control', label: 'With wrapping control' },
  { slug: 'with-referencing-control', label: 'With referencing control' },
  { slug: 'with-input-number', label: 'With input number' },
];

export default component$(() => {
  return (
    <>
      <h1>Label</h1>
      <p>Renders an accessible label associated with controls.</p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/label/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Label | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Renders an accessible label associated with controls.',
    },
  ],
};
