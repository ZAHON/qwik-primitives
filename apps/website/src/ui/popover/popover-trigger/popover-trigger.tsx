import type { PopoverTriggerProps } from './popover-trigger.types';
import { component$, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/shared/button';

/**
 * The button that toggles the popover.
 * By default, the `Popover.Content` will position itself against the trigger.
 * This component is based on the `button` element.
 */
export const PopoverTrigger = component$<PopoverTriggerProps>((props) => {
  const {
    size = '2',
    shape = 'button',
    variant = 'solid',
    color = 'primary',
    highContrast = false,
    radius,
    class: className,
    ...others
  } = props;

  return (
    <Popover.Trigger
      data-radius={radius}
      class={twm(buttonStyles({ size, shape, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Popover.Trigger>
  );
});
