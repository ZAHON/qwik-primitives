import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

export const WithImageAndWithFallback = component$(() => {
  return (
    <>
      <h2>With image & with fallback</h2>
      <Avatar.Root>
        <Avatar.Image
          alt="John Smith"
          src="https://picsum.photos/id/1005/400/400"
          onLoadingStatusChange$={(status) => `[qwik-primitives] Avatar.Image loading status: ${status}`}
        />
        <Avatar.Fallback delayMs={300}>JS</Avatar.Fallback>
      </Avatar.Root>
    </>
  );
});
