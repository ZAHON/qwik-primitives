import type { PopoverBodyProps } from './popover-body.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The body part of the popover content.
 * This component is based on the `div` element.
 */
export const PopoverBody = component$<PopoverBodyProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'div';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
