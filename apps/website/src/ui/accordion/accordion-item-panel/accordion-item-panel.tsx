import type { AccordionItemPanelProps } from './accordion-item-panel.types';
import { component$, Slot } from '@builder.io/qwik';
import { Accordion } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { accordionItemPanelStyles } from './accordion-item-panel.styles';

/**
 * The panel that expands/collapses.
 * This component is based on the `div` element.
 */
export const AccordionItemPanel = component$<AccordionItemPanelProps>((props) => {
  const { class: className, ...others } = props;

  return (
    <Accordion.ItemPanel class={twm(accordionItemPanelStyles(), className)} {...others}>
      <Slot />
    </Accordion.ItemPanel>
  );
});
