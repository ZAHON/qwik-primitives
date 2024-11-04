import type { AccordionItemHeaderProps } from './accordion-item-header.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { AccordionItemContext } from '../accordion-item-context';

/**
 * Wraps an `Accordion.ItemTrigger`.
 * Use the `level` prop to update it to the appropriate heading level for your page.
 * This component is based on the `h3` element.
 */
export const AccordionItemHeader = component$<AccordionItemHeaderProps>((props) => {
  const { as, level = '3', ...others } = props;

  const { isOpen, isDisabled } = useContext(AccordionItemContext);

  const Component = as || (`h${level}` as const);

  return (
    <Component
      data-qwik-primitives-accordion-item-header=""
      data-scope="accordion"
      data-part="item-header"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      data-level={level}
      {...others}
    >
      <Slot />
    </Component>
  );
});
