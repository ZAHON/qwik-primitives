import type { BreadcrumbsListProps } from './breadcrumbs-list.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { breadcrumbsListStyles } from './breadcrumbs-list.styles';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * Contains the breadcrumbs items.
 * This component is based on the `ol` element.
 */
export const BreadcrumbsList = component$<BreadcrumbsListProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(BreadcrumbsContext);

  return (
    <Breadcrumbs.List class={twm(breadcrumbsListStyles({ size }), className)} {...others}>
      <Slot />
    </Breadcrumbs.List>
  );
});
