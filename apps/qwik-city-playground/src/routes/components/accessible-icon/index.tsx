import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [{ slug: 'example', label: 'Example' }];

export default component$(() => {
  return (
    <>
      <h1>Accessible Icon</h1>
      <p>Makes icons accessible by adding a label.</p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/accessible-icon/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Accessible Icon | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'Makes icons accessible by adding a label.',
    },
  ],
};
