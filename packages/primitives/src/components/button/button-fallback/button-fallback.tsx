import type { ButtonFallbackProps } from './button-fallback.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { ButtonContext } from '../button-context';

/**
 * An element that renders when the button is currently in a `pending` state.
 * For more control use the `forceMount` prop to always render the component.
 * This component is based on the `span` element.
 */
export const ButtonFallback = component$<ButtonFallbackProps>((props) => {
  const { as, forceMount, ...others } = props;

  const { isDisabled, isPending } = useContext(ButtonContext);

  const Component = as || 'span';

  return (
    (forceMount || isPending.value) && (
      <Component
        aria-hidden={forceMount && !isPending.value ? 'true' : undefined}
        data-qwik-primitives-button-fallback=""
        data-scope="button"
        data-part="fallback"
        data-disabled={isDisabled.value ? '' : undefined}
        data-pending={isPending.value ? '' : undefined}
        {...others}
      >
        <Slot />
      </Component>
    )
  );
});
