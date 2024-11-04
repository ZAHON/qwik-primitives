import type { AccordionItemIndicatorProps } from './accordion-item-indicator.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { AccordionItemContext } from '../accordion-item-context';

/**
 * An optional decorative element that indicates the state of the accordion item.
 * It should be nested inside of an `Accordion.ItemTrigger`.
 * This component is based on the `span` element.
 */
export const AccordionItemIndicator = component$<AccordionItemIndicatorProps>((props) => {
  const { as, style, ...others } = props;

  const { isOpen, isDisabled } = useContext(AccordionItemContext);

  const Component = as || 'span';

  return (
    <Component
      aria-hidden="true"
      data-qwik-primitives-accordion-item-indicator=""
      data-scope="accordion"
      data-part="item-indicator"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      style={{
        pointerEvents: 'none',
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
