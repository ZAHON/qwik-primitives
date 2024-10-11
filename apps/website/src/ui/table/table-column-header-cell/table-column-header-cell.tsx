import type { TableColumnHeaderCellProps } from './table-column-header-cell.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableColumnHeaderCellStyles } from './table-column-header-cell.styles';
import { TableContext } from '../table-context';

export const TableColumnHeaderCell = component$<TableColumnHeaderCellProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size } = useContext(TableContext);

  const Component = as || 'th';

  return (
    <Component scope="col" class={twm(tableColumnHeaderCellStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
