import type { PrimitiveSupProps } from './primitive-sup.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `sup` element specifies inline text which is to be displayed as superscript for solely typographical reasons.
 * Superscripts are usually rendered with a raised baseline using smaller text.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup).
 */
export const PrimitiveSup = component$<PrimitiveSupProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'sup';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
