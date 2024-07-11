import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [
  { slug: 'uncontrolled-closed-by-default', label: 'Uncontrolled closed by default' },
  { slug: 'uncontrolled-open-by-default', label: 'Uncontrolled open by default' },
  { slug: 'controlled-closed-by-default', label: 'Controlled closed by default' },
  { slug: 'controlled-open-by-default', label: 'Controlled open by default' },
  { slug: 'animated-uncontrolled-closed-by-default', label: 'Animated uncontrolled closed by default' },
  { slug: 'animated-uncontrolled-open-by-default', label: 'Animated uncontrolled open by default' },
  { slug: 'animated-controlled-closed-by-default', label: 'Animated controlled closed by default' },
  { slug: 'animated-controlled-open-by-default', label: 'Animated controlled open by default' },
];

export default component$(() => {
  return (
    <>
      <h1>Collapsible</h1>
      <p>An interactive component which expands/collapses a panel.</p>

      <List.Root>
        {links.map(({ slug, label }) => (
          <List.Item key={slug}>
            <Link href={`/components/collapsible/${slug}`}>{label}</Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Collapsible | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'An interactive component which expands/collapses a panel.',
    },
  ],
};
