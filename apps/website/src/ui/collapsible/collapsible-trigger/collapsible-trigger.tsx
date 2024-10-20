import type { CollapsibleTriggerProps } from './collapsible-trigger.types';
import { component$, Slot } from '@builder.io/qwik';
import { Collapsible } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/shared/button';

/**
 * The button that toggles the collapsible.
 * This component is based on the `button` element.
 */
export const CollapsibleTrigger = component$<CollapsibleTriggerProps>((props) => {
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
    <Collapsible.Trigger
      data-radius={radius}
      class={twm(buttonStyles({ size, shape, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Collapsible.Trigger>
  );
});
