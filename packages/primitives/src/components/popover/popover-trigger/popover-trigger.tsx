import type { PopoverTriggerProps } from './popover-trigger.types';
import { component$, useContext, useTask$, $, Slot } from '@builder.io/qwik';
import { composeRefs } from '@/utilities';
import { PopoverContext } from '../popover-context';

/**
 * The button that toggles the popover.
 * By default, the `Popover.Content` will position itself against the trigger.
 * This component is based on the `button` element.
 */
export const PopoverTrigger = component$<PopoverTriggerProps>((props) => {
  const { as, ref, disabled, onClick$, ...others } = props;

  const { isOpen, setIsOpen$, triggerRef, contentId } = useContext(PopoverContext);

  useTask$(async () => undefined);

  const handleClick$ = $(() => {
    if (!disabled) setIsOpen$(true);
  });

  const Component = as || 'button';

  return (
    <Component
      ref={composeRefs([ref, triggerRef])}
      type="button"
      disabled={disabled}
      aria-haspopup={contentId.value ? 'dialog' : undefined}
      aria-expanded={contentId.value ? isOpen.value : undefined}
      aria-controls={contentId.value}
      data-qwik-primitives-popover-trigger=""
      data-scope="popover"
      data-part="trigger"
      data-state={isOpen.value ? 'open' : 'closed'}
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
