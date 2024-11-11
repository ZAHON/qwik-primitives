import type { AccordionItemIndicatorProps } from './accordion-item-indicator.types';
import { component$, Slot } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { accordionItemIndicatorStyles } from './accordion-item-indicator.styles';

/**
 * An optional decorative element that indicates the state of the accordion item.
 * It should be nested inside of an `Accordion.ItemTrigger`.
 * This component is based on the `span` element.
 */
export const AccordionItemIndicator = component$<AccordionItemIndicatorProps>((props) => {
  const { class: className, ...others } = props;

  return (
    <Accordion.ItemIndicator class={twm(accordionItemIndicatorStyles(), className)} {...others}>
      <Slot />
    </Accordion.ItemIndicator>
  );
});
