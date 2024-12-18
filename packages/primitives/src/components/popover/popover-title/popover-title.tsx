import type { PopoverTitleProps } from './popover-title.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { visuallyHiddenStyle } from '@/_internal/utilities';
import { PopoverContext } from '../popover-context';

/**
 * An optional accessible title to be announced when the popover is opened.
 * This component is based on the `h2` element.
 */
export const PopoverTitle = component$<PopoverTitleProps>((props) => {
  const { as, id, level = '2', visuallyHidden, style, ...others } = props;

  const { titleId } = useContext(PopoverContext);

  const autoId = useId();

  useTask$(() => {
    titleId.value = id || `qwik-primitives-popover-title-${autoId}`;
  });

  useTask$(({ cleanup }) => {
    cleanup(() => {
      if (isBrowser) titleId.value = undefined;
    });
  });

  const Component = as || (`h${level}` as const);

  return (
    <Component
      id={titleId.value}
      data-qwik-primitives-popover-title=""
      data-scope="popover"
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
