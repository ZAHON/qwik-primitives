import type { PrimitiveTrProps } from './primitive-tr.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `tr` element defines a row of cells in a table.
 * The row's cells can then be established using a mix of `td` (data cell) and `th` (header cell) elements.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr).
 */
export const PrimitiveTr = component$<PrimitiveTrProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'tr';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
