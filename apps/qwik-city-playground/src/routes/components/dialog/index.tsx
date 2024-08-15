import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [
  { slug: 'uncontrolled', label: 'Uncontrolled' },
  { slug: 'controlled', label: 'Controlled' },
  { slug: 'stacked-dialogs', label: 'Stacked dialogs' },
  { slug: 'stacked-dialogs-animated', label: 'Stacked dialogs animated' },
  { slug: 'initially-open', label: 'Initially open' },
  { slug: 'initially-open-animated', label: 'Initially open animated' },
  { slug: 'animated', label: 'Animated' },
];

export default component$(() => {
  return (
    <>
      <h1>Dialog</h1>
      <p>
        A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
      </p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/dialog/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Dialog | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content:
        'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
    },
  ],
};
