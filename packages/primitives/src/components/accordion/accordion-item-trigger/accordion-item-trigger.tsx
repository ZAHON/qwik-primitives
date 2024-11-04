import type { AccordionItemTriggerProps } from './accordion-item-trigger.types';
import { component$, useContext, useId, useTask$, $, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { AccordionItemContext } from '../accordion-item-context';

/**
 * Toggles the collapsed state of its associated item.
 * It should be nested inside of an `Accordion.ItemHeader`.
 * This component is based on the `button` element.
 */
export const AccordionItemTrigger = component$<AccordionItemTriggerProps>((props) => {
  const { as, id, onClick$, ...others } = props;

  const { value, isOpen, isDisabled, triggerId, panelId, onItemOpen$, onItemClose$ } = useContext(AccordionItemContext);

  const autoId = useId();

  useTask$(async () => undefined);

  useTask$(({ track }) => {
    track(() => id);

    triggerId.value = id || `qwik-primitives-accordion-item-trigger-${autoId}`;
  });

  useTask$(({ cleanup }) => {
    cleanup(() => {
      if (isBrowser) triggerId.value = undefined;
    });
  });

  const handleClick$ = $(() => {
    if (!isDisabled.value) {
      if (isOpen.value) {
        onItemClose$(value);
      } else {
        onItemOpen$(value);
      }
    }
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      id={triggerId.value}
      disabled={isDisabled.value}
      aria-controls={panelId.value}
      aria-expanded={panelId.value ? isOpen.value : undefined}
      data-qwik-primitives-accordion-item-trigger=""
      data-scope="accordion"
      data-part="item-trigger"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
