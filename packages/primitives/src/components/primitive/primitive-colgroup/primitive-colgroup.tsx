import type { PrimitiveColgroupProps } from './primitive-colgroup.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `colgroup` element defines a group of columns within a table.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup).
 */
export const PrimitiveColgroup = component$<PrimitiveColgroupProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'colgroup';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
