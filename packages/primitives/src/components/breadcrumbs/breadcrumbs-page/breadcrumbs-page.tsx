import type { BreadcrumbsPageProps } from './breadcrumbs-page.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A component that represents the current page.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsPage = component$<BreadcrumbsPageProps>((props) => {
  const { as, ...others } = props;

  const { isDisabled } = useContext(BreadcrumbsContext);

  const Component = as || 'span';

  return (
    <Component
      role="link"
      aria-current="page"
      aria-disabled="true"
      data-qwik-primitives-breadcrumbs-page=""
      data-scope="breadcrumbs"
      data-disabled={isDisabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
