import type { TableCellProps } from './table-cell.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableCellStyles } from './table-cell.styles';
import { TableContext } from '../table-context';

export const TableCell = component$<TableCellProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size } = useContext(TableContext);

  const Component = as || 'td';

  return (
    <Component class={twm(tableCellStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
