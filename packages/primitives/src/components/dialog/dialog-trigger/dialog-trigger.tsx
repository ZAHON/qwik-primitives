import type { DialogTriggerProps } from './dialog-trigger.types';
import { component$, useContext, useComputed$, useTask$, $, Slot } from '@builder.io/qwik';
import { composeRefs } from '@/utilities';
import { DialogContext } from '../dialog-context';

/**
 * The button that opens the dialog.
 * This component is based on the `button` element.
 */
export const DialogTrigger = component$<DialogTriggerProps>((props) => {
  const { as, ref, disabled, onClick$, ...others } = props;

  const { isOpen, setIsOpen$, triggerRef, contentId } = useContext(DialogContext);

  const isDisabled = useComputed$(() => disabled);

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  // In this case, it allows you to use the value of the contentId signal, which
  // is initialized only in the Dialog.Content component.
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
      aria-haspopup="dialog"
      aria-expanded={isOpen.value}
      aria-controls={contentId.value}
      data-qwik-primitives-dialog-trigger=""
      data-state={isOpen.value ? 'open' : 'closed'}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
