import type { TableBodyProps } from './table-body.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableBodyStyles } from './table-body.styles';

export const TableBody = component$<TableBodyProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'tbody';

  return (
    <Component class={twm(tableBodyStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
