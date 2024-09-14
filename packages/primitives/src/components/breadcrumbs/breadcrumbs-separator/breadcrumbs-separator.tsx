import type { BreadcrumbsSeparatorProps } from './breadcrumbs-separator.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * Used to visually separate breadcrumbs items.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsSeparator = component$<BreadcrumbsSeparatorProps>((props) => {
  const { as, ...others } = props;

  const { isDisabled } = useContext(BreadcrumbsContext);

  const Component = as || 'span';

  return (
    <Component
      aria-hidden="true"
      data-qwik-primitives-breadcrumbs-separator=""
      data-scope="breadcrumbs"
      data-part="separator"
      data-disabled={isDisabled.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
