import type { LinkRootProps } from './link-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { linkRootStyles } from './link-root.styles';

/**
 * Semantic element for navigation between pages.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const {
    as,
    external,
    openInNewTab,
    size,
    color = 'primary',
    highContrast = false,
    class: className,
    ...others
  } = props;

  const Component = as || 'a';

  return (
    <Component
      rel={external ? 'noopener noreferrer' : undefined}
      target={openInNewTab ? '_blank' : undefined}
      class={twm(linkRootStyles({ size, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Component>
  );
});
