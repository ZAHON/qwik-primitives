import type { CalloutIconProps } from './callout-icon.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { calloutIconStyles } from './callout-icon.styles';
import { CalloutContext } from '../callout-context';

/**
 * Provides width and height for the icon associated with the callout.
 * This component is based on the `div` element.
 */
export const CalloutIcon = component$<CalloutIconProps>((props) => {
  const { as, class: className, ...others } = props;

  const { size } = useContext(CalloutContext);

  const Component = as || 'div';

  return (
    <Component class={twm(calloutIconStyles({ size }), className)} {...others}>
      <Slot />
    </Component>
  );
});
