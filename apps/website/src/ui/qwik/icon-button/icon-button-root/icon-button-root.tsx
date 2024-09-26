import type { IconButtonRootProps } from './icon-button-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { iconButtonRootStyles } from './icon-button-root.styles';

export const IconButtonRoot = component$<IconButtonRootProps>((props) => {
  const {
    as,
    disabled,
    size = '2',
    variant = 'ghost',
    color = 'default',
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
      class={twm(iconButtonRootStyles({ size, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Component>
  );
});
