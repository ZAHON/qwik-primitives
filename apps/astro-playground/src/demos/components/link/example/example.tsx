import { component$ } from '@builder.io/qwik';
import { Link } from 'qwik-primitives';

export const Example = component$(() => {
  return (
    <>
      <h2>Example</h2>
      <Link.Root href="https://github.com/ZAHON/qwik-primitives">Qwik Primitives</Link.Root>
    </>
  );
});
