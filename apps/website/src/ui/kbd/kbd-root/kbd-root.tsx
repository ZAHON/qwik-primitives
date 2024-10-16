import type { KbdRootProps } from './kbd-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { kbdRootStyles } from './kbd-root.styles';

/**
 * Represents keyboard input or a hotkey.
 * This component is based on the `kbd` element.
 */
export const KbdRoot = component$<KbdRootProps>((props) => {
  const { as, size, class: className, ...others } = props;

  const Component = as || 'kbd';

  return (
    <Component class={twm(kbdRootStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
