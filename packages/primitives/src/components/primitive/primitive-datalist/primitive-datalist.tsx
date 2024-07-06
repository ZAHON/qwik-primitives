import type { PrimitiveDatalistProps } from './primitive-datalist.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `datalist` element contains a set of `option` elements that represent the
 * permissible or recommended options available to choose from within other controls.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist).
 */
export const PrimitiveDatalist = component$<PrimitiveDatalistProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'datalist';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
