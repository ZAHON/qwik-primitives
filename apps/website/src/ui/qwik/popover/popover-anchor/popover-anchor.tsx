import type { PopoverAnchorProps } from './popover-anchor.types';
import { component$, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';

export const PopoverAnchor = component$<PopoverAnchorProps>((props) => {
  return (
    <Popover.Anchor {...props}>
      <Slot />
    </Popover.Anchor>
  );
});
