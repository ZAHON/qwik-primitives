import type { AccordionItemContentProps } from './accordion-item-content.types';
import { component$, Slot } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

/**
 * The component that contains the collapsible content for an item.
 * Must be nested inside `Accordion.ItemPanel`.
 * This component is based on the `div` element.
 */
export const AccordionItemContent = component$<AccordionItemContentProps>((props) => {
  return (
    <Accordion.ItemContent {...props}>
      <Slot />
    </Accordion.ItemContent>
  );
});
