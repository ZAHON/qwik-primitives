import type { BreadcrumbsPageProps } from './breadcrumbs-page.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A component that represents the current page.
 * Should be nested inside `Breadcrumbs.Item`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsPage = component$<BreadcrumbsPageProps>((props) => {
  const { as, ...others } = props;

  const { disabled } = useContext(BreadcrumbsContext);

  const Component = as || 'span';

  return (
    <Component
      role="link"
      aria-current="page"
      aria-disabled="true"
      data-qwik-primitives-breadcrumbs-page=""
      data-scope="breadcrumbs"
      data-part="page"
      data-disabled={disabled ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
