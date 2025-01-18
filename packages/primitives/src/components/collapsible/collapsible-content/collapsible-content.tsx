import type { CollapsibleContentProps } from './collapsible-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { CollapsibleContext } from '../collapsible-context';

/**
 * The component that contains the collapsible content.
 * Must be nested inside `Collapsible.Panel`.
 * This component is based on the `div` element.
 */
export const CollapsibleContent = component$<CollapsibleContentProps>((props) => {
  const { as, style, ...others } = props;

  const { isOpen, isDisabled, isPanelHide, panelStatus } = useContext(CollapsibleContext);

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-collapsible-content=""
      data-scope="collapsible"
      data-part="content"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      style={{ overflow: panelStatus.value === 'open' ? undefined : 'hidden', ...style }}
      {...others}
    >
      {!isPanelHide.value && <Slot />}
    </Component>
  );
});
