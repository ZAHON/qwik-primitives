import type { PrimitiveEmProps } from './primitive-em.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `em` element marks text that has stress emphasis.
 * The `em` element can be nested, with each level of nesting indicating a greater degree of emphasis.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em).
 */
export const PrimitiveEm = component$<PrimitiveEmProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'em';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
