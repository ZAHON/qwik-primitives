import type { LinkRootProps } from './link-root.types';
import { component$, useComputed$, sync$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the link.
 * This component is based on the `a` element.
 */
export const LinkRoot = component$<LinkRootProps>((props) => {
  const { as, disabled, onClick$, ...others } = props;

  const isDisabled = useComputed$(() => disabled);

  const handleClickSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    const disabled = currentTarget.getAttribute('aria-disabled') === 'true';
    if (disabled) event.preventDefault();
  });

  const Componet = as || 'a';

  return (
    <Componet
      aria-disabled={isDisabled.value ? true : undefined}
      data-qwik-primitives-link-root=""
      data-scope="link"
      data-disabled={isDisabled.value ? '' : undefined}
      onClick$={[onClick$, handleClickSync$]}
      {...others}
    >
      <Slot />
    </Componet>
  );
});
