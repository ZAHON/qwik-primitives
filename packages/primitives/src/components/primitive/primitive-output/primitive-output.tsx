import type { PrimitiveOutputProps } from './primitive-output.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `output` element is a container element into which a site or app
 * can inject the results of a calculation or the outcome of a user action.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output).
 */
export const PrimitiveOutput = component$<PrimitiveOutputProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'output';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
