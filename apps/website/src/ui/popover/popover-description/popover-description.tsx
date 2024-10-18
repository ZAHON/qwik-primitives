import type { PopoverDescriptionProps } from './popover-description.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Popover } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { popoverDescriptionStyles } from './popover-description.styles';
import { PopoverContentContext } from '../popover-content-context';

/**
 * An optional accessible description to be announced when the popover is opened.
 * This component is based on the `p` element.
 */
export const PopoverDescription = component$<PopoverDescriptionProps>((props) => {
  const { size, highContrast = true, class: className, ...others } = props;

  const { size: contentSize } = useContext(PopoverContentContext);

  return (
    <Popover.Description
      class={twm(popoverDescriptionStyles({ size: size ?? contentSize, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Popover.Description>
  );
});
