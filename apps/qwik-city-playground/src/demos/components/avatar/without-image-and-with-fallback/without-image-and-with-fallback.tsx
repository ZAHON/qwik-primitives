import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

export const WithoutImageAndWithFallback = component$(() => {
  return (
    <>
      <h2>Without image & with fallback</h2>
      <Avatar.Root>
        <Avatar.Fallback>JS</Avatar.Fallback>
      </Avatar.Root>
    </>
  );
});
