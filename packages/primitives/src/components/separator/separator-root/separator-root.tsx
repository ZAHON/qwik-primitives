import type { SeparatorRootProps } from './separator-root.types';
import { component$ } from '@builder.io/qwik';

/**
 * The separator.
 * This component is based on the `div` element.
 */
export const SeparatorRoot = component$<SeparatorRootProps>((props) => {
  const { as, orientation = 'horizontal', decorative, ...others } = props;

  const Component = as || 'div';

  return (
    <Component
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation === 'vertical' ? 'vertical' : undefined}
      data-orientation={orientation}
      {...others}
    />
  );
});
