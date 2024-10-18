import type { PopoverContentProps } from './popover-content.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { popoverContentStyles } from './popover-content.styles';
import { PopoverContentContext } from '../popover-content-context';

/**
 * The component that pops out when the popover is open.
 * This component is based on the `div` element.
 */
export const PopoverContent = component$<PopoverContentProps>((props) => {
  const {
    align = 'start',
    sideOffset = 8,
    collisionPadding = { top: 56, right: 16, bottom: 16, left: 16 },
    size = '2',
    class: className,
    ...others
  } = props;

  useContextProvider(PopoverContentContext, { size });

  return (
    <Popover.Content
      align={align}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      class={twm(popoverContentStyles({ size }), className)}
      {...others}
    >
      <Slot />
    </Popover.Content>
  );
});
