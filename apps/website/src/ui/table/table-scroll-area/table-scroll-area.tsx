import type { TableScrollAreaProps } from './table-scroll-area.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableScrollAreaStyles } from './table-scroll-area.styles';

export const TableScrollArea = component$<TableScrollAreaProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'div';

  return (
    <Component data-table-scroll-area="" class={twm(tableScrollAreaStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
