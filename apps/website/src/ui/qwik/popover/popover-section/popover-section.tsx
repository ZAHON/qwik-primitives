import type { PopoverSectionProps } from './popover-section.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { popoverSectionStyles } from './popover-section.styles';
import { PopoverContentContext } from '../popover-content-context';

export const PopoverSection = component$<PopoverSectionProps>((props) => {
  const { as, size, class: className, ...others } = props;

  const { size: contentSize } = useContext(PopoverContentContext);

  const Component = as || 'section';

  return (
    <Component class={twm(popoverSectionStyles({ size: size ?? contentSize }), className)} {...others}>
      <Slot />
    </Component>
  );
});
