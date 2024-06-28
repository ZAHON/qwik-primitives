import type { LinkRootProps } from './link-root.types';
import { component$, sync$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the link.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { as, disabled, external, onClick$, ...others } = props;

  const handleClickSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    const disabled = currentTarget.getAttribute('aria-disabled') === 'true';
    if (disabled) event.preventDefault();
  });

  const Componet = as || 'a';

  return (
    <Componet
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      aria-disabled={disabled ? true : undefined}
      data-disabled={disabled ? '' : undefined}
      data-external={external ? '' : undefined}
      onClick$={[onClick$, handleClickSync$]}
      {...others}
    >
      <Slot />
    </Componet>
  );
});
