import type { CalloutTextProps } from './callout-text.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Renders the callout text.
 * This component is based on the `p` element.
 */
export const CalloutText = component$<CalloutTextProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'p';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
