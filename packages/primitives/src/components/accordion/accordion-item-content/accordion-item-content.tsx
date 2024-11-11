import type { AccordionItemContentProps } from './accordion-item-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { AccordionItemContext } from '../accordion-item-context';

/**
 * The component that contains the collapsible content for an item.
 * Must be nested inside `Accordion.ItemPanel`.
 * This component is based on the `div` element.
 */
export const AccordionItemContent = component$<AccordionItemContentProps>((props) => {
  const { as, style, ...others } = props;

  const { isOpen, isPanelHide, isDisabled } = useContext(AccordionItemContext);

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-accordion-item-content=""
      data-scope="accordion"
      data-part="item-content"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      style={{ overflow: 'hidden', ...style }}
      {...others}
    >
      {!isPanelHide.value && <Slot />}
    </Component>
  );
});
