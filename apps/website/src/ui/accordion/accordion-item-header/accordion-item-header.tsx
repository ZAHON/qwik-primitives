import type { AccordionItemHeaderProps } from './accordion-item-header.types';
import { component$, Slot } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';

/**
 * Wraps an `Accordion.ItemTrigger`.
 * Use the `level` prop to update it to the appropriate heading level for your page.
 * This component is based on the `h3` element.
 */
export const AccordionItemHeader = component$<AccordionItemHeaderProps>((props) => {
  return (
    <Accordion.ItemHeader {...props}>
      <Slot />
    </Accordion.ItemHeader>
  );
});
