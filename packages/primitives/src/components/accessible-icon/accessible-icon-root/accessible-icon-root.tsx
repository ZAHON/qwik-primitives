import type { AccessibleIconRootProps } from './accessible-icon-root.types';
import { component$ } from '@builder.io/qwik';
import { visuallyHiddenStyle } from '@/utilities';

/**
 * Contains the icon to make accessible.
 * This component is based on the `svg` element.
 */
export const AccessibleIconRoot = component$<AccessibleIconRootProps>((props) => {
  const { as, label, ...others } = props;

  const Component = as;

  return (
    <>
      <Component
        data-qwik-primitives-accessible-icon-root=""
        {...{ 'aria-hidden': 'true', focusable: 'false' }}
        {...others}
      />
      <span data-qwik-primitives-accessible-icon-label="" style={visuallyHiddenStyle}>
        {label}
      </span>
    </>
  );
});
