import type { SpoilerContentProps } from './spoiler-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';

/**
 * The component that contains the spoiler content.
 * Must be rendered inside `Spoiler.Panel`.
 * This component is based on the `div` element.
 */
export const SpoilerContent = component$<SpoilerContentProps>((props) => {
  return (
    <Spoiler.Content {...props}>
      <Slot />
    </Spoiler.Content>
  );
});
