import type { DocsNavLinkProps } from './docs-nav-link.types';
import { component$, Slot } from '@builder.io/qwik';
import { docsNavLinkStyles } from './docs-nav-link.styles';

export const DocsNavLink = component$<DocsNavLinkProps>((props) => {
  const { href, active, external, openInNewTab } = props;

  return (
    <a
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={openInNewTab ? '_blank' : undefined}
      aria-current={active ? 'page' : undefined}
      class={docsNavLinkStyles({ active })}
    >
      <Slot />
    </a>
  );
});
