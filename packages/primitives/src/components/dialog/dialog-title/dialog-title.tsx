import type { DialogTitleProps } from './dialog-title.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { visuallyHiddenStyle } from '@/_internal/utilities';
import { DialogContext } from '../dialog-context';

/**
 * An accessible title to be announced when the dialog is opened.
 * This component is based on the `h2` element.
 */
export const DialogTitle = component$<DialogTitleProps>((props) => {
  const { as, id, level = '2', visuallyHidden, style, ...others } = props;

  const { titleId } = useContext(DialogContext);

  const autoId = useId();

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    titleId.value = id || `qwik-primitives-dialog-title-${autoId}`;
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
      data-qwik-primitives-dialog-title=""
      data-scope="dialog"
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
