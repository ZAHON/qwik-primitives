import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

export const AvatarDemo = component$(() => {
  return (
    <Avatar.Root>
      <Avatar.Image />
      <Avatar.Fallback />
    </Avatar.Root>
  );
});
