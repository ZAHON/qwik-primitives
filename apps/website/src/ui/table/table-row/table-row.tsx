import type { TableRowProps } from './table-row.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableRowStyles } from './table-row.styles';

export const TableRow = component$<TableRowProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'tr';

  return (
    <Component class={twm(tableRowStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
