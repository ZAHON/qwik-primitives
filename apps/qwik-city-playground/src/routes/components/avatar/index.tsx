import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [
  { slug: 'without-image-and-with-fallback', label: 'Without image & with fallback' },
  { slug: 'with-image-and-with-fallback', label: 'With image & with fallback' },
  { slug: 'with-image-and-with-fallback-but-broken-src', label: 'With image & with fallback (but broken src)' },
];

export default component$(() => {
  return (
    <>
      <h1>Avatar</h1>
      <p>An image element with a fallback for representing the user.</p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/avatar/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Avatar | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'An image element with a fallback for representing the user.',
    },
  ],
};
