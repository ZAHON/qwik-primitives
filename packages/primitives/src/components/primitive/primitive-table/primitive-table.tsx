import type { PrimitiveTableProps } from './primitive-table.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The `table` element represents tabular data—that is, information presented in a
 * two-dimensional table comprised of rows and columns of cells containing data.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).
 */
export const PrimitiveTable = component$<PrimitiveTableProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'table';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
