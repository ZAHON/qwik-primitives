import type { AccordionItemTriggerProps } from './accordion-item-trigger.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { accordionItemTriggerStyles } from './accordion-item-trigger.styles';
import { AccordionContext } from '../accordion-context';

/**
 * Toggles the collapsed state of its associated item.
 * It should be nested inside of an `Accordion.ItemHeader`.
 * This component is based on the `button` element.
 */
export const AccordionItemTrigger = component$<AccordionItemTriggerProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(AccordionContext);

  return (
    <Accordion.ItemTrigger class={twm(accordionItemTriggerStyles({ size }), className)} {...others}>
      <Slot />
    </Accordion.ItemTrigger>
  );
});
