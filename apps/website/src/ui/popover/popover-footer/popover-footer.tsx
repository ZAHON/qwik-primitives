import type { PopoverFooterProps } from './popover-footer.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * The footer part of the popover content.
 * This component is based on the `footer` element.
 */
export const PopoverFooter = component$<PopoverFooterProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'footer';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
