import type { AlertDialogTitleProps } from './alert-dialog-title.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { visuallyHiddenStyle } from '@/_internal/utilities';
import { AlertDialogContext } from '../alert-dialog-context';

/**
 * An accessible name to be announced when the alert dialog is opened.
 * This component is based on the `h2` element.
 */
export const AlertDialogTitle = component$<AlertDialogTitleProps>((props) => {
  const { as, id, level = '2', visuallyHidden, style, ...others } = props;

  const { titleId } = useContext(AlertDialogContext);

  const autoId = useId();

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    titleId.value = id || `qwik-primitives-alert-dialog-title-${autoId}`;
  });

  useTask$(({ cleanup }) => {
    cleanup(() => {
      // If a component is unmounted in the browser, its id will also be removed for
      // accessibility reasons so that other DOM elements do not refer to this non-existent element.
      if (isBrowser) titleId.value = undefined;
    });
  });

  const Component = as || (`h${level}` as const);

  return (
    <Component
      id={titleId.value}
      data-qwik-primitives-alert-dialog-title=""
      data-scope="alert-dialog"
      data-part="title"
      data-level={level}
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
