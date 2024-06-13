import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link, List } from '@/components';

const links = [
  { href: '/collapsible/disabled-closed-by-default', label: 'Disabled closed by default' },
  { href: '/collapsible/disabled-open-by-default', label: 'Disabled open by default' },
  { href: '/collapsible/uncontrolled-closed-by-default', label: 'Uncontrolled closed by default' },
  { href: '/collapsible/uncontrolled-open-by-default', label: 'Uncontrolled open by default' },
  { href: '/collapsible/controlled-closed-by-default', label: 'Controlled closed by default' },
  { href: '/collapsible/controlled-open-by-default', label: 'Controlled open by default' },
  { href: '/collapsible/animated-uncontrolled-closed-by-default', label: 'Animated uncontrolled closed by default' },
  { href: '/collapsible/animated-uncontrolled-open-by-default', label: 'Animated uncontrolled open by default' },
  { href: '/collapsible/animated-controlled-closed-by-default', label: 'Animated controlled closed by default' },
  { href: '/collapsible/animated-controlled-open-by-default', label: 'Animated controlled open by default' },
];

export default component$(() => {
  return (
    <>
      <h1>Collapsible</h1>
      <p>An interactive component which expands/collapses a panel.</p>

      <List.Root>
        {links.map(({ href, label }) => (
          <List.Item key={href}>
            <Link href={href}>{label}</Link>
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
