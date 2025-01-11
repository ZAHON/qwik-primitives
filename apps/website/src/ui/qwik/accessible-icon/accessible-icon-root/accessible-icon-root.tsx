import type { AccessibleIconRootProps } from './accessible-icon-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { accessibleIconRootStyles } from './accessible-icon-root.styles';

/**
 * Makes icons accessible.
 * This component is based on the `span` element.
 */
export const AccessibleIconRoot = component$<AccessibleIconRootProps>((props) => {
  const { as, class: className, ...others } = props;

  const Component = as || 'span';

  return (
    <Component aria-hidden="true" class={twm(accessibleIconRootStyles(), className)} {...others}>
      <Slot />
    </Component>
  );
});
