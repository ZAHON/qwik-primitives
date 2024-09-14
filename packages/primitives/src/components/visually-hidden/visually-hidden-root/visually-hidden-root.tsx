import type { VisuallyHiddenRootProps } from './visually-hidden-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { visuallyHiddenStyle } from '@/utilities';

/**
 * Anything you put inside this component will be hidden from the screen but will be announced by screen readers.
 * This component is based on the `span` element.
 */
export const VisuallyHiddenRoot = component$<VisuallyHiddenRootProps>((props) => {
  const { as, style, ...others } = props;

  const Component = as || 'span';

  return (
    <Component
      data-qwik-primitives-visually-hidden-root=""
      data-scope="visually-hidden"
      style={{
        ...visuallyHiddenStyle,
        ...style,
      }}
      {...others}
    >
      <Slot />
    </Component>
  );
});
