import type { BreadcrumbsListProps } from './breadcrumbs-list.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Contains the breadcrumbs items.
 * This component is based on the `ol` element.
 */
export const BreadcrumbsList = component$<BreadcrumbsListProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'ol';

  return (
    <Component {...others}>
      <Slot />
    </Component>
  );
});
