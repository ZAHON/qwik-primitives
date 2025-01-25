import { component$, Slot } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';

export const CodePresentationSpoilerContent = component$(() => {
  return (
    <Spoiler.Content>
      <Slot />
    </Spoiler.Content>
  );
});
