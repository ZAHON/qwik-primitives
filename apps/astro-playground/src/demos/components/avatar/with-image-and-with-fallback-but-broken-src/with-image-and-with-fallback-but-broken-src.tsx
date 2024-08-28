import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

export const WithImageAndWithFallbackButBrokenSrc = component$(() => {
  return (
    <>
      <h2>With image & with fallback (but broken src)</h2>
      <Avatar.Root>
        <Avatar.Image
          alt="John Smith"
          src="https://broken.link.com/broken-pic.jpg"
          onLoadingStatusChange$={(status) => `[qwik-primitives] Avatar.Image loading status: ${status}`}
        />
        <Avatar.Fallback>JS</Avatar.Fallback>
      </Avatar.Root>
    </>
  );
});
