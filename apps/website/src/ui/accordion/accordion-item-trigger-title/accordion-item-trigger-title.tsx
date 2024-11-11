import type { AccordionItemTriggerTitleProps } from './accordion-item-trigger-title.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { accordionItemTriggerTitleStyles } from './accordion-item-trigger-title.styles';
import { AccordionContext } from '../accordion-context';

/**
 * The title part of the trigger.
 * Must be nested inside `Accordion.ItemTrigger`.
 * This component is based on the `span` element.
 */
export const AccordionItemTriggerTitle = component$<AccordionItemTriggerTitleProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size } = useContext(AccordionContext);

  const Component = as || 'span';

  return (
    <Component class={twm(accordionItemTriggerTitleStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
