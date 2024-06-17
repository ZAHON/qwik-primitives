import type { CollapsibleTriggerProps } from './collapsible-trigger.types';
import { component$, useContext, $, Slot } from '@builder.io/qwik';
import { CollapsibleContext } from '../collapsible-context';

/**
 * The button that toggles the collapsible.
 * This component is based on the `button` element.
 */
export const CollapsibleTrigger = component$<CollapsibleTriggerProps>((props) => {
  const { as, onClick$, ...others } = props;

  const { isOpen, disabled, panelId } = useContext(CollapsibleContext);

  const handleClick$ = $(() => {
    isOpen.value = !isOpen.value;
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={disabled}
      aria-controls={panelId}
      aria-expanded={isOpen.value}
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
