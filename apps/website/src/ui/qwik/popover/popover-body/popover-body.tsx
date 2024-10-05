import type { PopoverBodyProps } from './popover-body.types';
import { component$, Slot } from '@builder.io/qwik';

export const PopoverBody = component$<PopoverBodyProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'div';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
