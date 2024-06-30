import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [
  { slug: 'example', label: 'Example' },
  { slug: 'disabled', label: 'Disabled' },
  { slug: 'with-disabled-link', label: 'With disabled link' },
];

export default component$(() => {
  return (
    <>
      <h1>Breadcrumbs</h1>
      <p>Show hierarchy and navigational context for a user`s location within an application.</p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/breadcrumbs/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Breadcrumbs | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Show hierarchy and navigational context for a user`s location within an application.',
    },
  ],
};
