import type { TableRootProps } from './table-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableRootStyles } from './table-root.styles';
import { TableContext } from '../table-context';

export const TableRoot = component$<TableRootProps>((props) => {
  const { as, size = '2', layout = 'auto', class: className, ...others } = props;

  useContextProvider(TableContext, { size, layout });

  const Component = as || 'div';

  return (
    <Component class={twm(tableRootStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
