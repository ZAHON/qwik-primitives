import type { DialogCloseProps } from './dialog-close.types';
import { component$, useContext, $, Slot } from '@builder.io/qwik';
import { DialogContext } from '../dialog-context';

/**
 * The button that closes the dialog.
 * This component is based on the `button` element.
 */
export const DialogClose = component$<DialogCloseProps>((props) => {
  const { as, disabled, onClick$, ...others } = props;

  const { setIsOpen$ } = useContext(DialogContext);

  const handleClick$ = $(() => {
    if (!disabled) setIsOpen$(false);
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={disabled}
      data-qwik-primitives-dialog-close=""
      data-scope="dialog"
      data-part="close"
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
