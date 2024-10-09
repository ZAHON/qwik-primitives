import type { LinkRootProps } from './link-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { twm } from '@/utilities/twm';
import { linkRootStyles } from './link-root.styles';

export const LinkRoot = component$<LinkRootProps>((props) => {
  const {
    prefetch = true,
    external,
    openInNewTab,
    size = '3',
    color = 'primary',
    highContrast = false,
    class: className,
    ...others
  } = props;

  return (
    <Link
      prefetch={prefetch}
      rel={external ? 'noopener noreferrer' : undefined}
      target={openInNewTab ? '_blank' : undefined}
      class={twm(linkRootStyles({ size, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Link>
  );
});
