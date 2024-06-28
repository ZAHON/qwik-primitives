import { component$ } from '@builder.io/qwik';
import { Link } from 'qwik-primitives';

export const Disabled = component$(() => {
  return (
    <>
      <h2>Disabled</h2>
      <Link.Root disabled={true} href="https://github.com/ZAHON/qwik-primitives">
        Qwik Primitives
      </Link.Root>
    </>
  );
});
