import type { PrimitiveMarkProps } from './primitive-mark.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `mark` element represents text which is marked or highlighted for reference
 * or notation purposes due to the marked passage's relevance in the enclosing context.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark).
 */
export const PrimitiveMark = component$<PrimitiveMarkProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'mark';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
