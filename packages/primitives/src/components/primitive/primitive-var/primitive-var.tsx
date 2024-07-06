import type { PrimitiveVarProps } from './primitive-var.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `var` element represents the name of a variable in a mathematical expression or a programming context.
 * It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var).
 */
export const PrimitiveVar = component$<PrimitiveVarProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'var';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
