import type { PrimitiveUlProps } from './primitive-ul.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `ul` element represents an unordered list of items, typically rendered as a bulleted list.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul).
 */
export const PrimitiveUl = component$<PrimitiveUlProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'ul';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
