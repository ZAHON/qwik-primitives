import type { SpoilerTriggerProps } from './spoiler-trigger.types';
import { component$, Slot } from '@builder.io/qwik';
import { Spoiler } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/shared/button';

/**
 * The button that toggles the spoiler.
 * This component is based on the `button` element.
 */
export const SpoilerTrigger = component$<SpoilerTriggerProps>((props) => {
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
    <Spoiler.Trigger
      data-radius={radius}
      class={twm(buttonStyles({ size, shape, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Spoiler.Trigger>
  );
});
