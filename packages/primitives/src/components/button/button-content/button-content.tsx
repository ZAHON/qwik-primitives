import type { ButtonContentProps } from './button-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { ButtonContext } from '../button-context';

/**
 * Contains the content for the button.
 * By default, it will render only when the button is not currently in a `pending` state,
 * use the `forceMount` prop to always render the content.
 * This component is based on the `span` element.
 */
export const ButtonContent = component$<ButtonContentProps>((props) => {
  const { as, forceMount, ...others } = props;

  const { isDisabled, isPending } = useContext(ButtonContext);

  const Component = as || 'span';

  return (
    (forceMount || !isPending.value) && (
      <Component
        aria-hidden={forceMount && isPending.value ? 'true' : undefined}
        data-qwik-primitives-button-content=""
        data-scope="button"
        data-part="content"
        data-disabled={isDisabled.value ? '' : undefined}
        data-pending={isPending.value ? '' : undefined}
        {...others}
      >
        <Slot />
      </Component>
    )
  );
});
