import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Avatar } from '@/demos';

export default component$(() => {
  return (
    <>
      <h1>Avatar</h1>
      <p>An image element with a fallback for representing the user.</p>

      <Avatar.WithImageAndWithFallbackButBrokenSrc />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Avatar with image & with fallback (but broken src) | Qwik Primitives Qwik City Playground',
  meta: [
    {
      name: 'description',
      content: 'An image element with a fallback for representing the user.',
    },
  ],
};
