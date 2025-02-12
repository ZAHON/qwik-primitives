import type { SpoilerTriggerProps } from './spoiler-trigger.types';
import { component$, useContext, useTask$, $, Slot } from '@builder.io/qwik';
import { SpoilerContext } from '../spoiler-context';

/**
 * The button that toggles the spoiler.
 * This component is based on the `button` element.
 */
export const SpoilerTrigger = component$<SpoilerTriggerProps>((props) => {
  const { as, onClick$, ...others } = props;

  const { isOpen, setIsOpen$, isDisabled, panelId } = useContext(SpoilerContext);

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
      data-qwik-primitives-spoiler-trigger=""
      data-scope="spoiler"
      data-part="trigger"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={isDisabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
