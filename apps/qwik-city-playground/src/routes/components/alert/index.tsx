import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [{ slug: 'example', label: 'Example' }];

export default component$(() => {
  return (
    <>
      <h1>Alert</h1>
      <p>
        Display a brief, important message in a way that attracts the user's attention without interrupting the user's
        task.
      </p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/alert/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Alert | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content:
        "Display a brief, important message in a way that attracts the user's attention without interrupting the user's task.",
    },
  ],
};
