import type { PrimitiveSmallProps } from './primitive-small.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `small` element represents side-comments and small print, like copyright and legal text, independent of its
 * styled presentation. By default, it renders text within it one font-size smaller, such as from `small` to `x-small`.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small).
 */
export const PrimitiveSmall = component$<PrimitiveSmallProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'small';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
