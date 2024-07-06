import type { PrimitiveDialogProps } from './primitive-dialog.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `dialog` element represents a modal or non-modal dialog box or other
 * interactive component, such as a dismissible alert, inspector, or subwindow.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).
 */
export const PrimitiveDialog = component$<PrimitiveDialogProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'dialog';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
