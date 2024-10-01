import type { ButtonRootProps } from './button-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { buttonRootStyles } from './button-root.styles';

export const ButtonRoot = component$<ButtonRootProps>((props) => {
  const {
    as,
    disabled,
    size = '2',
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
      type="button"
      disabled={disabled}
      data-disabled={disabled ? '' : undefined}
      data-radius={radius}
      class={twm(buttonRootStyles({ size, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Component>
  );
});
