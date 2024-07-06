import type { PrimitiveLiProps } from './primitive-li.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `li` element is used to represent an item in a list. It must be contained in a parent element:
 * an ordered list (`ol`), an unordered list (`ul`), or a menu (`menu`).
 * In menus and unordered lists, list items are usually displayed using bullet points.
 * In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li).
 */
export const PrimitiveLi = component$<PrimitiveLiProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'li';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
