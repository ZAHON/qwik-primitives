import type { PrimitiveMenuProps } from './primitive-menu.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `menu` element is described in the HTML specification as a semantic alternative to `ul`,
 * but treated by browsers (and exposed through the accessibility tree) as no different than `ul`.
 * It represents an unordered list of items (which are represented by `li` elements).
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu).
 */
export const PrimitiveMenu = component$<PrimitiveMenuProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'menu';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
