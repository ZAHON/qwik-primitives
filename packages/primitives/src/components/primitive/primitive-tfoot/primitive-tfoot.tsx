import type { PrimitiveTfootProps } from './primitive-tfoot.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `tfoot` element encapsulates a set of table rows (`tr` elements), indicating
 * that they comprise the foot of a table with information about the table's columns.
 * This is usually a summary of the columns, e.g., a sum of the given numbers in a column.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot).
 */
export const PrimitiveTfoot = component$<PrimitiveTfootProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'tfoot';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
