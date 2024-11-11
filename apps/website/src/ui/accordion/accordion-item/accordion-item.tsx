import type { AccordionItemProps } from './accordion-item.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { accordionItemStyles } from './accordion-item.styles';
import { AccordionContext } from '../accordion-context';

/**
 * Contains all the parts of a collapsible section.
 * This component is based on the `div` element.
 */
export const AccordionItem = component$<AccordionItemProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(AccordionContext);

  return (
    <Accordion.Item class={twm(accordionItemStyles({ size }), className)} {...others}>
      <Slot />
    </Accordion.Item>
  );
});
