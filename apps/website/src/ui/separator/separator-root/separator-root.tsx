import type { SeparatorRootProps } from './separator-root.types';
import { component$ } from '@builder.io/qwik';
import { Separator } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { separatorRootStyles } from './separator-root.styles';

export const SeparatorRoot = component$<SeparatorRootProps>((props) => {
  const { orientation = 'horizontal', class: className, ...others } = props;

  return (
    <Separator.Root
      orientation={orientation}
      class={twm(separatorRootStyles({ orientation }), className)}
      {...others}
    />
  );
});
