import type { PrimitiveDdProps } from './primitive-dd.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `dd` element provides the description, definition,
 * or value for the preceding term (`dt`) in a description list (`dl`).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd).
 */
export const PrimitiveDd = component$<PrimitiveDdProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'dd';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
