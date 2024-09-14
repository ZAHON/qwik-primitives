import type { BreadcrumbsRootProps } from './breadcrumbs-root.types';
import { component$, useContextProvider, useComputed$, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * Contains all the parts of a breadcrumbs.
 * This component is based on the `nav` element.
 */
export const BreadcrumbsRoot = component$<BreadcrumbsRootProps>((props) => {
  const { as, 'aria-label': ariaLabel = 'Breadcrumbs', disabled, ...others } = props;

  const isDisabled = useComputed$(() => disabled);

  useContextProvider(BreadcrumbsContext, { isDisabled });

  const Component = as || 'nav';

  return (
    <Component
      aria-label={ariaLabel}
      data-qwik-primitives-breadcrumbs-root=""
      data-scope="breadcrumbs"
      data-disabled={isDisabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
