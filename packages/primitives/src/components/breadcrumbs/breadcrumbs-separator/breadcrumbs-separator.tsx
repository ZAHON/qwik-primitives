import type { BreadcrumbsSeparatorProps } from './breadcrumbs-separator.types';
import { component$, Slot } from '@builder.io/qwik';

/**
 * Used to visually separate breadcrumbs items.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsSeparator = component$<BreadcrumbsSeparatorProps>((props) => {
  const { as, ...others } = props;

  const Component = as || 'span';

  return (
    <Component role="presentation" aria-hidden="true" {...others}>
      <Slot />
    </Component>
  );
});
