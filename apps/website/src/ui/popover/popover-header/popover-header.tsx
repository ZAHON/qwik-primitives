import type { PopoverHeaderProps } from './popover-header.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { popoverHeaderStyles } from './popover-header.styles';
import { PopoverContentContext } from '../popover-content-context';

/**
 * The header part of the popover content.
 * This component is based on the `header` element.
 */
export const PopoverHeader = component$<PopoverHeaderProps>((props) => {
  const { as, size, class: className, ...others } = props;

  const { size: contentSize } = useContext(PopoverContentContext);

  const Component = as || 'header';

  return (
    <Component class={twm(popoverHeaderStyles({ size: size ?? contentSize }), className)} {...others}>
      <Slot />
    </Component>
  );
});
