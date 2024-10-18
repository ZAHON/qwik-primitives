import type { PopoverAnchorProps } from './popover-anchor.types';
import { component$, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';

/**
 * An optional element to position the `Popover.Content` against.
 * If this part is not used, the content will position alongside the `Popover.Trigger`.
 * This component is based on the `div` element.
 */
export const PopoverAnchor = component$<PopoverAnchorProps>((props) => {
  return (
    <Popover.Anchor {...props}>
      <Slot />
    </Popover.Anchor>
  );
});
