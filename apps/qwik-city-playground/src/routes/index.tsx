import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const componentsLinks = [
  { slug: 'accessible-icon', label: 'Accessible Icon' },
  { slug: 'alert', label: 'Alert' },
  { slug: 'breadcrumbs', label: 'Breadcrumbs' },
  { slug: 'collapsible', label: 'Collapsible' },
  { slug: 'dialog', label: 'Dialog' },
  { slug: 'label', label: 'Label' },
  { slug: 'link', label: 'Link' },
  { slug: 'visually-hidden', label: 'Visually Hidden' },
];

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
