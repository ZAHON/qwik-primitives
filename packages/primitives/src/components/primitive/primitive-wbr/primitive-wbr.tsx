import type { PrimitiveWbrProps } from './primitive-wbr.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `wbr` element represents a word break opportunity - a position within text where the browser may optionally
 * break a line, though its line-breaking rules would not otherwise create a break at that location.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr).
 */
export const PrimitiveWbr = component$<PrimitiveWbrProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'wbr';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
