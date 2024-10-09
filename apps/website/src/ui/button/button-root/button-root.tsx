import type { ButtonRootProps } from './button-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { buttonStyles } from '@/styles/shared/button';

export const ButtonRoot = component$<ButtonRootProps>((props) => {
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
