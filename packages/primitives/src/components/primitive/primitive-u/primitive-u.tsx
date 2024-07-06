import type { PrimitiveUProps } from './primitive-u.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `u` element represents a span of inline text which should be
 * rendered in a way that indicates that it has a non-textual annotation.
 * This is rendered by default as a simple solid underline, but may be altered using CSS.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u).
 */
export const PrimitiveU = component$<PrimitiveUProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'u';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
