import type { PrimitiveSubProps } from './primitive-sub.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `sub` element specifies inline text which should be displayed as subscript for solely typographical reasons.
 * Subscripts are typically rendered with a lowered baseline using smaller text.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub).
 */
export const PrimitiveSub = component$<PrimitiveSubProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'sub';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
