import type { ButtonLinkRootProps } from './button-link-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { twm } from '@/utilities/twm';
import { buttonLinkRootStyles } from './button-link-root.styles';

export const ButtonLinkRoot = component$<ButtonLinkRootProps>((props) => {
  const {
    prefetch = true,
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

  return (
    <Link
      prefetch={prefetch}
      rel={external ? 'noopener noreferrer' : undefined}
      target={openInNewTab ? '_blank' : undefined}
      data-radius={radius}
      class={twm(buttonLinkRootStyles({ size, shape, variant, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Link>
  );
});
