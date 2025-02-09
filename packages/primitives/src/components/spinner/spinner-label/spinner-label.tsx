import type { SpinnerLabelProps } from './spinner-label.types';
import { component$, useComputed$, Slot } from '@builder.io/qwik';
import { visuallyHiddenStyle } from '@/_internal/utilities';

/**
 * The fallback loading text.
 * This text by default will be only visible to screen readers.
 * This component is based on the `span` element.
 */
export const SpinnerLabel = component$<SpinnerLabelProps>((props) => {
  const { as, visuallyHidden = true, style, ...others } = props;

  const labelStyle = useComputed$(() => ({ ...(visuallyHidden && visuallyHiddenStyle), ...style }));

  const Component = as || 'span';

  return (
    <Component
      data-qwik-primitives-spinner-label=""
      data-scope="spinner"
      data-part="label"
      data-visually-hidden={visuallyHidden ? '' : undefined}
      style={labelStyle.value}
      {...others}
    >
      <Slot />
    </Component>
  );
});
