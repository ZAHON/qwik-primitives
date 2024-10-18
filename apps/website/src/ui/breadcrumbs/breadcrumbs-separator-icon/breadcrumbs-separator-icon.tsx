import type { BreadcrumbsSeparatorIconProps } from './breadcrumbs-separator-icon.types';
import { component$, useContext } from '@builder.io/qwik';
import { CaretRightIcon } from '@/icons/caret-right-icon';
import { getIconSize } from './utilities';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * The default icon that separate breadcrumbs items.
 * Must be rendered inside `Breadcrumbs.Separator`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsSeparatorIcon = component$<BreadcrumbsSeparatorIconProps>((props) => {
  const { size } = useContext(BreadcrumbsContext);

  return <CaretRightIcon height={getIconSize(size)} width={getIconSize(size)} {...props} />;
});
