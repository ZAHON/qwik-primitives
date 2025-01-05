import type { BaseButtonRootProps } from './base-button-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/shared/button';

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 * This component is based on the `button` element.
 */
export const BaseButtonRoot = component$<BaseButtonRootProps>((props) => {
  const {
    as,
    disabled,
    type = 'button',
    size = '2',
    shape = 'button',
    variant = 'solid',
    color = 'primary',
    highContrast = false,
    radius,
    class: className,
    ...others
  } = props;

  const Component = as || 'button';

  return (
    <Component
      type={type}
      disabled={disabled}
      data-disabled={disabled ? '' : undefined}
      data-radius={radius}
      class={twm(buttonStyles({ size, shape, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Component>
  );
});
