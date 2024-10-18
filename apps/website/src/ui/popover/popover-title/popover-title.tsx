import type { PopoverTitleProps } from './popover-title.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { popoverTitleStyles } from './popover-title.styles';
import { PopoverContentContext } from '../popover-content-context';

/**
 * An optional accessible title to be announced when the popover is opened.
 * This component is based on the `h2` element.
 */
export const PopoverTitle = component$<PopoverTitleProps>((props) => {
  const { size, highContrast = true, class: className, ...others } = props;

  const { size: contentSize } = useContext(PopoverContentContext);

  return (
    <Popover.Title class={twm(popoverTitleStyles({ size: size ?? contentSize, highContrast }), className)} {...others}>
      <Slot />
    </Popover.Title>
  );
});
