import type { AlertDialogDescriptionProps } from './alert-dialog-description.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { visuallyHiddenStyle } from '@/utilities';
import { AlertDialogContext } from '../alert-dialog-context';

/**
 * An accessible description to be announced when the alert dialog is opened.
 * This component is based on the `p` element.
 */
export const AlertDialogDescription = component$<AlertDialogDescriptionProps>((props) => {
  const { as, id, visuallyHidden, style, ...others } = props;

  const { descriptionId } = useContext(AlertDialogContext);

  const autoId = useId();

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    descriptionId.value = id || `qwik-primitives-alert-dialog-description-${autoId}`;
  });

  useTask$(({ cleanup }) => {
    cleanup(() => {
      // If a component is unmounted in the browser, its id will also be removed for
      // accessibility reasons so that other DOM elements do not refer to this non-existent element.
      if (isBrowser) descriptionId.value = undefined;
    });
  });

  const Component = as || 'p';

  return (
    <Component
      id={descriptionId.value}
      data-qwik-primitives-alert-dialog-description=""
      data-scope="alert-dialog"
      data-part="description"
      style={{
        ...(visuallyHidden && visuallyHiddenStyle),
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
