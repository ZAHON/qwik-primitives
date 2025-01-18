import type { CollapsibleIndicatorProps } from './collapsible-indicator.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { CollapsibleContext } from '../collapsible-context';

/**
 * An optional decorative element that indicates the state of the collapsible.
 * This component is based on the `span` element.
 */
export const CollapsibleIndicator = component$<CollapsibleIndicatorProps>((props) => {
  const { as, style, ...others } = props;

  const { isOpen, isDisabled } = useContext(CollapsibleContext);

  const Component = as || 'span';

  return (
    <Component
      aria-hidden="true"
      data-qwik-primitives-collapsible-indicator=""
      data-scope="collapsible"
      data-part="indicator"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      style={{
        pointerEvents: 'none',
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
