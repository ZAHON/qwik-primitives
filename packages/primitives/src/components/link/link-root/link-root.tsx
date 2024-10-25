import type { LinkRootProps } from './link-root.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the link.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { as, href, disabled, ...others } = props;

  const Componet = as || 'a';

  return (
    <Componet
      role={disabled ? 'link' : undefined}
      href={disabled ? undefined : href}
      aria-disabled={disabled ? true : undefined}
      data-qwik-primitives-link-root=""
      data-scope="link"
      data-part="root"
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Componet>
  );
});
