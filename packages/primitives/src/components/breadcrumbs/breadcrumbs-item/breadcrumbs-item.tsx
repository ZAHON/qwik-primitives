import type { BreadcrumbsItemProps } from './breadcrumbs-item.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A breadcrumbs item.
 * This component is based on the `li` element.
 */
export const BreadcrumbsItem = component$<BreadcrumbsItemProps>((props) => {
  const { as, ...others } = props;

  const { disabled } = useContext(BreadcrumbsContext);

  const Component = as || 'li';

  return (
    <Component
      data-qwik-primitives-breadcrumbs-item=""
      data-scope="breadcrumbs"
      data-part="item"
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
