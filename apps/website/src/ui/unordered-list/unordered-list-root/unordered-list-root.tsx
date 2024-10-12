import type { UnorderedListRootProps } from './unordered-list-root.types';
import { component$, Slot } from '@builder.io/qwik';
import { twm } from '@/utilities/twm';
import { unorderedListRootStyles } from './unordered-list-root.styles';

/**
 * Contains all the parts of a unordered list.
 * This component is based on the `ul` element.
 */
export const UnorderedListRoot = component$<UnorderedListRootProps>((props) => {
  const { as, size = '3', highContrast = true, class: className, ...others } = props;

  const Component = as || 'ul';

  return (
    <Component class={twm(unorderedListRootStyles({ size, highContrast }), className)} {...others}>
      <Slot />
    </Component>
  );
});
