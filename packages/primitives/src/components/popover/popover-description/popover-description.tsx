import type { PopoverDescriptionProps } from './popover-description.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { visuallyHiddenStyle } from '@/utilities';
import { PopoverContext } from '../popover-context';

/**
 * An optional accessible description to be announced when the popover is opened.
 * This component is based on the `p` element.
 */
export const PopoverDescription = component$<PopoverDescriptionProps>((props) => {
  const { as, id, visuallyHidden, style, ...others } = props;

  const { descriptionId } = useContext(PopoverContext);

  const autoId = useId();

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    descriptionId.value = id || `qwik-primitives-popover-description-${autoId}`;
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
      data-qwik-primitives-popover-description=""
      data-scope="popover"
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
