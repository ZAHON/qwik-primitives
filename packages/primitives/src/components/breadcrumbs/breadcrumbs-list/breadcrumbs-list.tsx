import type { BreadcrumbsListProps } from './breadcrumbs-list.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * Contains the breadcrumbs items.
 * This component is based on the `ol` element.
 */
export const BreadcrumbsList = component$<BreadcrumbsListProps>((props) => {
  const { as, ...others } = props;

  const { isDisabled } = useContext(BreadcrumbsContext);

  const Component = as || 'ol';

  return (
    <Component
      data-qwik-primitives-breadcrumbs-list=""
      data-scope="breadcrumbs"
      data-disabled={isDisabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
