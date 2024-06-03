import type { CollapsibleContentProps } from './collapsible-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { CollapsibleContext } from '../collapsible-context';

/**
 * The component that contains the collapsible content.
 * Must be rendered inside `Collapsible.Panel`.
 * This component is based on the `div` element.
 */
export const CollapsibleContent = component$<CollapsibleContentProps>((props) => {
  const { isOpen, isContentHide, disabled } = useContext(CollapsibleContext);

  return (
    <div data-state={isOpen.value ? 'open' : 'closed'} data-disabled={disabled ? '' : undefined} {...props}>
      {!isContentHide.value && <Slot />}
    </div>
  );
});
