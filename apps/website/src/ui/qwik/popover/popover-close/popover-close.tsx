import type { PopoverCloseProps } from './popover-close.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/button';
import { PopoverContentContext } from '../popover-content-context';

export const PopoverClose = component$<PopoverCloseProps>((props) => {
  const {
    shape = 'button',
    variant = 'soft',
    color = 'default',
    highContrast = false,
    size,
    radius,
    class: className,
    ...others
  } = props;

  const { size: contentSize } = useContext(PopoverContentContext);

  return (
    <Popover.Close
      data-radius={radius}
      class={twm(buttonStyles({ size: size ?? contentSize, shape, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Popover.Close>
  );
});
