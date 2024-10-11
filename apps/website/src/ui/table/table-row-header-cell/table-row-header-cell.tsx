import type { TableRowHeaderCellProps } from './table-row-header-cell.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableRowHeaderCellStyles } from './table-row-header-cell.styles';
import { TableContext } from '../table-context';

export const TableRowHeaderCell = component$<TableRowHeaderCellProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size } = useContext(TableContext);

  const Component = as || 'th';

  return (
    <Component scope="row" class={twm(tableRowHeaderCellStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
