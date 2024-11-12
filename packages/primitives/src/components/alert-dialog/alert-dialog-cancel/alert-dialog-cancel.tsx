import type { AlertDialogCancelProps } from './alert-dialog-cancel.types';
import { component$, useContext, $, Slot } from '@builder.io/qwik';
import { AlertDialogContext } from '../alert-dialog-context';

/**
 * A button that closes the alert dialog.
 * This button should be distinguished visually from `AlertDialog.Action` buttons.
 * This component is based on the `button` element.
 */
export const AlertDialogCancel = component$<AlertDialogCancelProps>((props) => {
  const { as, disabled, onClick$, ...others } = props;

  const { setIsOpen$ } = useContext(AlertDialogContext);

  const handleClick$ = $(() => {
    if (!disabled) setIsOpen$(false);
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={disabled}
      data-qwik-primitives-alert-dialog-cancel=""
      data-scope="alert-dialog"
      data-part="cancel"
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
