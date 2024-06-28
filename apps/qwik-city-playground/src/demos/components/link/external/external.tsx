import { component$ } from '@builder.io/qwik';
import { Link } from 'qwik-primitives';

export const External = component$(() => {
  return (
    <>
      <h2>External</h2>
      <Link.Root external={true} href="https://github.com/ZAHON/qwik-primitives">
        Qwik Primitives
      </Link.Root>
    </>
  );
});