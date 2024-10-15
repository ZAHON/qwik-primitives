import type { ButtonLinkRootProps } from './button-link-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { buttonLinkRootStyles } from './button-link-root.styles';

/**
 * Semantic element for navigation between pages.
 * This component is based on the `a` element.
 */
export const ButtonLinkRoot = component$<ButtonLinkRootProps>((props) => {
  const {
    as,
    external,
    openInNewTab,
    size = '2',
    shape = 'button',
    variant = 'solid',
    color = 'primary',
    highContrast = false,
    radius,
    class: className,
    ...others
  } = props;

  const Component = as || 'a';

  return (
    <Component
      rel={external ? 'noopener noreferrer' : undefined}
      target={openInNewTab ? '_blank' : undefined}
      data-radius={radius}
      class={twm(buttonLinkRootStyles({ size, shape, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Component>
  );
});
