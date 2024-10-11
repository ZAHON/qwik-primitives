import type { BadgeRootProps } from './badge-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { badgeRootStyles } from './badge-root.styles';

/**
 * This component is based on the `span` element.
 */
export const BadgeRoot = component$<BadgeRootProps>((props) => {
  const {
    as,
    size = '1',
    variant = 'soft',
    color = 'primary',
    highContrast = false,
    radius,
    class: className,
    ...others
  } = props;

  const Component = as || 'span';

  return (
    <Component
      data-radius={radius}
      class={twm(badgeRootStyles({ size, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Component>
  );
});
