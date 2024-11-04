import type { AccordionItemProps } from './accordion-item.types';
import { component$, useContext, useComputed$, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { AccordionContext } from '../accordion-context';
import { AccordionItemContext } from '../accordion-item-context';

/**
 * Contains all the parts of a collapsible section.
 * This component is based on the `div` element.
 */
export const AccordionItem = component$<AccordionItemProps>((props) => {
  const { as, value, disabled, ...others } = props;

  const { accordionValue, accordionDisabled, onItemOpen$, onItemClose$ } = useContext(AccordionContext);

  const isOpen = useComputed$(() => (value && accordionValue.value.includes(value)) || false);
  const isDisabled = useComputed$(() => disabled ?? accordionDisabled);

  const isPanelHide = useSignal(!isOpen.value);
  const panelStatus = useSignal<'open' | 'closed' | 'indeterminate'>(isOpen.value ? 'open' : 'closed');

  const triggerId = useSignal<string | undefined>(undefined);
  const panelId = useSignal<string | undefined>(undefined);

  useContextProvider(AccordionItemContext, {
    value,
    isOpen,
    isPanelHide,
    panelStatus,
    triggerId,
    panelId,
    isDisabled,
    onItemOpen$,
    onItemClose$,
  });

  const Component = as || 'div';

  return (
    <Component
      data-qwik-primitives-accordion-item=""
      data-scope="accordion"
      data-part="item"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
