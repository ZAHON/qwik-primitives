import type { DialogDescriptionProps } from './dialog-description.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { visuallyHiddenStyle } from '@/_internal/utilities';
import { DialogContext } from '../dialog-context';

/**
 * An optional accessible description to be announced when the dialog is opened.
 * This component is based on the `p` element.
 */
export const DialogDescription = component$<DialogDescriptionProps>((props) => {
  const { as, id, visuallyHidden, style, ...others } = props;

  const { descriptionId } = useContext(DialogContext);

  const autoId = useId();

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    descriptionId.value = id || `qwik-primitives-dialog-description-${autoId}`;
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
      data-qwik-primitives-dialog-description=""
      data-scope="dialog"
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
