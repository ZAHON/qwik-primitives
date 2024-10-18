import type { BreadcrumbsRootProps } from './breadcrumbs-root.types';
import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { breadcrumbsRootStyles } from './breadcrumbs-root.styles';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * Contains all the parts of a breadcrumbs.
 * This component is based on the `nav` element.
 */
export const BreadcrumbsRoot = component$<BreadcrumbsRootProps>((props) => {
  const { size = '2', color = 'default', class: className, ...others } = props;

  useContextProvider(BreadcrumbsContext, { size, color });

  return (
    <Breadcrumbs.Root class={twm(breadcrumbsRootStyles({ size }), className)} {...others}>
      <Slot />
    </Breadcrumbs.Root>
  );
});
