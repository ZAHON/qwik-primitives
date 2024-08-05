import type { AlertRootProps } from './alert-root.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the alert.
 * This component is based on the `div` element.
 */
export const AlertRoot = component$<AlertRootProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'div';

  return (
    <Component data-qwik-primitives-alert-root="" role="alert" {...others}>
      <Slot />
    </Component>
  );
});
