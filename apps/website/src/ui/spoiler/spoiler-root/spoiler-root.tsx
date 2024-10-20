import type { SpoilerRootProps } from './spoiler-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';

/**
 * Contains all the parts of a spoiler.
 * This component is based on the `div` element.
 */
export const SpoilerRoot = component$<SpoilerRootProps>((props) => {
  return (
    <Spoiler.Root {...props}>
      <Slot />
    </Spoiler.Root>
  );
});
