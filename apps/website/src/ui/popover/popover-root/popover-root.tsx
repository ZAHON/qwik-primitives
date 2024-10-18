import type { PopoverRootProps } from './popover-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';

/**
 * Contains all the parts of a popover.
 */
export const PopoverRoot = component$<PopoverRootProps>((props) => {
  return (
    <Popover.Root {...props}>
      <Slot />
    </Popover.Root>
  );
});
