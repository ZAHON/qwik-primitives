import type { BreadcrumbsPageProps } from './breadcrumbs-page.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { breadcrumbsPageStyles } from './breadcrumbs-page.styles';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A component that represents the current page.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsPage = component$<BreadcrumbsPageProps>((props) => {
  const { class: className, ...others } = props;

  const { color } = useContext(BreadcrumbsContext);

  return (
    <Breadcrumbs.Page class={twm(breadcrumbsPageStyles({ color }), className)} {...others}>
      <Slot />
    </Breadcrumbs.Page>
  );
});
