import type { PrimitiveThProps } from './primitive-th.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `th` element defines a cell as the header of a group of table cells and may be used as a child of the `tr` element.
 * The exact nature of this group is defined by the `scope` and `headers` attributes.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th).
 */
export const PrimitiveTh = component$<PrimitiveThProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'th';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
