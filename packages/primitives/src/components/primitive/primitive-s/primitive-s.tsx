import type { PrimitiveSProps } from './primitive-s.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `s` element renders text with a strikethrough, or a line through it.
 * Use the `s` element to represent things that are no longer relevant or no longer accurate.
 * However, `s` is not appropriate when indicating document edits; for that, use the `del` and `ins` elements, as appropriate.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s).
 */
export const PrimitiveS = component$<PrimitiveSProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 's';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
