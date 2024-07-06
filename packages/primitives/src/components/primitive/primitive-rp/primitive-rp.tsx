import type { PrimitiveRpProps } from './primitive-rp.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `rp` element is used to provide fall-back parentheses for browsers that
 * do not support display of ruby annotations using the `ruby` element.
 * One `rp` element should enclose each of the opening and closing parentheses
 * that wrap the `rt` element that contains the annotation's text.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp).
 */
export const PrimitiveRp = component$<PrimitiveRpProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'rp';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
