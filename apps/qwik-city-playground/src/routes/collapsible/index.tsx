import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Collapsible</h1>
      <p>An interactive component which expands/collapses a panel.</p>
      <div style="display: flex; flex-direction: column; row-gap: 0.5rem;">
        <Link href="/collapsible/disabled-closed-by-default" prefetch={false}>
          Disabled closed by default
        </Link>
        <Link href="/collapsible/disabled-open-by-default" prefetch={false}>
          Disabled open by default
        </Link>
        <Link href="/collapsible/uncontrolled-closed-by-default" prefetch={false}>
          Uncontrolled closed by default
        </Link>
        <Link href="/collapsible/uncontrolled-open-by-default" prefetch={false}>
          Uncontrolled open by default
        </Link>
        <Link href="/collapsible/controlled-closed-by-default" prefetch={false}>
          Controlled closed by default
        </Link>
        <Link href="/collapsible/controlled-open-by-default" prefetch={false}>
          Controlled open by default
        </Link>
        <Link href="/collapsible/animated-uncontrolled-closed-by-default" prefetch={false}>
          Animated uncontrolled closed by default
        </Link>
        <Link href="/collapsible/animated-uncontrolled-open-by-default" prefetch={false}>
          Animated uncontrolled open by default
        </Link>
        <Link href="/collapsible/animated-controlled-closed-by-default" prefetch={false}>
          Animated controlled closed by default
        </Link>
        <Link href="/collapsible/animated-controlled-open-by-default" prefetch={false}>
          Animated controlled open by default
        </Link>
      </div>
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
