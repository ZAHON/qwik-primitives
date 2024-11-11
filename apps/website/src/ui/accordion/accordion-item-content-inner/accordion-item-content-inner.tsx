import type { AccordionItemContentInnerProps } from './accordion-item-content-inner.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { accordionItemContentInnerStyles } from './accordion-item-content-inner.styles';
import { AccordionContext } from '../accordion-context';

/**
 * The inner part of the content.
 * Must be nested inside `Accordion.ItemContent`.
 * This component is based on the `div` element.
 */
export const AccordionItemContentInner = component$<AccordionItemContentInnerProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size } = useContext(AccordionContext);

  const Component = as || 'div';

  return (
    <Component class={twm(accordionItemContentInnerStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
