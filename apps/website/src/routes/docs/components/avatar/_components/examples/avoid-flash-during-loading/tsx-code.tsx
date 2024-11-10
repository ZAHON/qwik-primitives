import { component$ } from '@builder.io/qwik';
import { Avatar } from 'qwik-primitives';

export const AvatarDemo = component$(() => {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar.Root>
  );
});
