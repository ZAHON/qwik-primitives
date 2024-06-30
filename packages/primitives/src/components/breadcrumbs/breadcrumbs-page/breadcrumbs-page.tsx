import type { BreadcrumbsPageProps } from './breadcrumbs-page.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * A component that represents the current page.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsPage = component$<BreadcrumbsPageProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'span';

  return (
    <Component role="link" aria-current="page" aria-disabled="true" {...others}>
      <Slot />
    </Component>
  );
});
