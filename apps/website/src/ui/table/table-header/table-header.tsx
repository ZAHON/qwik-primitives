import type { TableHeaderProps } from './table-header.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableHeaderStyles } from './table-header.styles';

export const TableHeader = component$<TableHeaderProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'thead';

  return (
    <Component class={twm(tableHeaderStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
