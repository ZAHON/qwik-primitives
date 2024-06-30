import type { BreadcrumbsRootProps } from './breadcrumbs-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * Contains all the parts of a breadcrumbs.
 * This component is based on the `nav` element.
 */
export const BreadcrumbsRoot = component$<BreadcrumbsRootProps>((props) => {
  const { as, 'aria-label': ariaLabel = 'Breadcrumbs', disabled, ...others } = props;

  useContextProvider(BreadcrumbsContext, { disabled });

  const Component = as || 'nav';

  return (
    <Component aria-label={ariaLabel} {...others}>
      <Slot />
    </Component>
  );
});
