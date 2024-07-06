import type { PrimitiveBdoProps } from './primitive-bdo.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `bdo` HTML element overrides the current directionality of text,
 * so that the text within is rendered in a different direction.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo).
 */
export const PrimitiveBdo = component$<PrimitiveBdoProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'bdo';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
