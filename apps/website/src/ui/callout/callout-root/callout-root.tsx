import type { CalloutRootProps } from './callout-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { calloutRootStyles } from './callout-root.styles';
import { CalloutContext } from '../callout-context';

/**
 * Contains all the parts of a callout.
 * This component is based on the `div` element.
 */
export const CalloutRoot = component$<CalloutRootProps>((props) => {
  const { as, alert, size = '2', color = 'default', highContrast = false, class: className, ...others } = props;

  useContextProvider(CalloutContext, { size });

  const Component = as || 'div';

  return (
    <Component
      role={alert ? 'alert' : undefined}
      class={twm(calloutRootStyles({ size, color, highContrast }), className)}
      {...others}
    >
      <Slot />
    </Component>
  );
});
