import type { DialogCloseProps } from './dialog-close.types';
import { component$, useContext, useComputed$, $, Slot } from '@builder.io/qwik';
import { DialogContext } from '../dialog-context';

/**
 * The button that closes the dialog.
 * This component is based on the `button` element.
 */
export const DialogClose = component$<DialogCloseProps>((props) => {
  const { as, disabled, onClick$, ...others } = props;

  const { setIsOpen$ } = useContext(DialogContext);

  const isDisabled = useComputed$(() => disabled);

  const handleClick$ = $(() => {
    if (!isDisabled.value) setIsOpen$(false);
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={isDisabled.value}
      data-qwik-primitives-dialog-close=""
      data-scope="dialog"
      data-part="close"
      data-disabled={isDisabled.value ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
