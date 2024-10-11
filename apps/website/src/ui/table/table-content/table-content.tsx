import type { TableContentProps } from './table-content.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableContentStyles } from './table-content.styles';
import { TableContext } from '../table-context';

export const TableContent = component$<TableContentProps>((props) => {
  const { as, class: className, ...others } = props;

  const { layout } = useContext(TableContext);

  const Component = as || 'table';

  return (
    <Component class={twm(tableContentStyles({ layout }), className)} {...others}>
      <Slot />
    </Component>
  );
});
