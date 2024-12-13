import type { ButtonRootProps } from './button-root.types';
import { component$, useComputed$, useContextProvider, Slot } from '@builder.io/qwik';
import { ButtonContext } from '../button-context';

/**
 * Contains all the parts of a button.
 * This component is based on the `button` element.
 */
export const ButtonRoot = component$<ButtonRootProps>((props) => {
  const { as, type = 'button', disabled, pending, ...others } = props;

  const isDisabled = useComputed$(() => disabled);
  const isPending = useComputed$(() => pending);

  useContextProvider(ButtonContext, { isDisabled, isPending });

  const Component = as || 'button';

  return (
    <Component
      type={type}
      disabled={isDisabled.value}
      aria-disabled={isPending.value ? 'true' : undefined}
      data-qwik-primitives-button-root=""
      data-scope="button"
      data-part="root"
      data-disabled={isDisabled.value ? '' : undefined}
      data-pending={isPending.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
