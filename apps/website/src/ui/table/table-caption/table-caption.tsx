import type { TableCaptionProps } from './table-caption.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { tableCaptionStyles } from './table-caption.styles';

export const TableCaption = component$<TableCaptionProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'caption';

  return (
    <Component class={twm(tableCaptionStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
