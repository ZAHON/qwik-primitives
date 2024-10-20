import type { CollapsibleRootProps } from './collapsible-root.types';
import { Collapsible } from 'qwik-primitives';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains all the parts of a collapsible.
 * This component is based on the `div` element.
 */
export const CollapsibleRoot = component$<CollapsibleRootProps>((props) => {
  return (
    <Collapsible.Root {...props}>
      <Slot />
    </Collapsible.Root>
  );
});
