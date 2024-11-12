import type { SpinnerLabelProps } from './spinner-label.types';
import { component$, Slot } from '@builder.io/qwik';
import { visuallyHiddenStyle } from '@/_internal/utilities';

/**
 * The fallback loading text.
 * This text by default will be only visible to screen readers.
 * This component is based on the `span` element.
 */
export const SpinnerLabel = component$<SpinnerLabelProps>((props) => {
  const { as, visuallyHidden = true, style, ...others } = props;

  const Component = as || 'span';

  return (
    <Component
      data-qwik-primitives-spinner-label=""
      data-scope="spinner"
      data-part="label"
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
