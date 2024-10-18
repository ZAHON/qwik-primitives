import type { BreadcrumbsLinkProps } from './breadcrumbs-link.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { breadcrumbsLinkStyles } from './breadcrumbs-link.styles';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A breadcrumbs link.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `a` element.
 */
export const BreadcrumbsLink = component$<BreadcrumbsLinkProps>((props) => {
  const { class: className, ...others } = props;

  const { color } = useContext(BreadcrumbsContext);

  return (
    <Breadcrumbs.Link class={twm(breadcrumbsLinkStyles({ color }), className)} {...others}>
      <Slot />
    </Breadcrumbs.Link>
  );
});
