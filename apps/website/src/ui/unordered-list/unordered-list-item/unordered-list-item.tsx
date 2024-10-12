import type { UnorderedListItemProps } from './unordered-list-item.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains the content for the item.
 * This component is based on the `li` element.
 */
export const UnorderedListItem = component$<UnorderedListItemProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'li';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
