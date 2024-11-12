import type { AlertDialogActionProps } from './alert-dialog-action.types';
import { component$, useContext, $, Slot } from '@builder.io/qwik';
import { AlertDialogContext } from '../alert-dialog-context';

/**
 * A button that closes the alert dialog.
 * These buttons should be distinguished visually from the `AlertDialog.Cancel` button.
 * This component is based on the `button` element.
 */
export const AlertDialogAction = component$<AlertDialogActionProps>((props) => {
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
      data-qwik-primitives-alert-dialog-action=""
      data-scope="alert-dialog"
      data-part="action"
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
