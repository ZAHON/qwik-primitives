import type { PrimitiveBrProps } from './primitive-br.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `br` element produces a line break in text (carriage-return).
 * It is useful for writing a poem or an address, where the division of lines is significant.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br).
 */
export const PrimitiveBr = component$<PrimitiveBrProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'br';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
