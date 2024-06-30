import type { BreadcrumbsItemProps } from './breadcrumbs-item.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A breadcrumbs item.
 * This component is based on the `li` element.
 */
export const BreadcrumbsItem = component$<BreadcrumbsItemProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'li';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
