import type { AlertDialogTriggerProps } from './alert-dialog-trigger.types';
import { component$, useContext, useComputed$, useTask$, $, Slot } from '@builder.io/qwik';
import { composeRefs } from '@/utilities';
import { AlertDialogContext } from '../alert-dialog-context';

/**
 * The button that opens the alert dialog.
 * This component is based on the `button` element.
 */
export const AlertDialogTrigger = component$<AlertDialogTriggerProps>((props) => {
  const { as, ref, disabled, onClick$, ...others } = props;

  const { isOpen, setIsOpen$, triggerRef, contentId } = useContext(AlertDialogContext);

  const isDisabled = useComputed$(() => disabled);

  useTask$(async () => undefined);

  const handleClick$ = $(() => {
    if (!isDisabled.value) setIsOpen$(true);
  });

  const Component = as || 'button';

  return (
    <Component
      ref={composeRefs([ref, triggerRef])}
      type="button"
      disabled={isDisabled.value}
      aria-haspopup={contentId.value ? 'dialog' : undefined}
      aria-expanded={contentId.value ? isOpen.value : undefined}
      aria-controls={contentId.value}
      data-qwik-primitives-alert-dialog-trigger=""
      data-scope="alert-dialog"
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
