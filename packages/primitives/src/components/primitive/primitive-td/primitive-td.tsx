import type { PrimitiveTdProps } from './primitive-td.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `td` element defines a cell of a table that contains data and may be used as a child of the `tr` element.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td).
 */
export const PrimitiveTd = component$<PrimitiveTdProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'td';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
