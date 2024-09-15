import type { CollapsibleTriggerProps } from './collapsible-trigger.types';
import { component$, useContext, useTask$, $, Slot } from '@builder.io/qwik';
import { CollapsibleContext } from '../collapsible-context';

/**
 * The button that toggles the collapsible.
 * This component is based on the `button` element.
 */
export const CollapsibleTrigger = component$<CollapsibleTriggerProps>((props) => {
  const { as, onClick$, ...others } = props;

  const { isOpen, setIsOpen$, isDisabled, panelId } = useContext(CollapsibleContext);

  useTask$(async () => undefined);

  const handleClick$ = $(() => {
    if (!isDisabled.value) setIsOpen$(!isOpen.value);
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={isDisabled.value}
      aria-controls={panelId.value}
      aria-expanded={panelId.value ? isOpen.value : undefined}
      data-qwik-primitives-collapsible-trigger=""
      data-scope="collapsible"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
