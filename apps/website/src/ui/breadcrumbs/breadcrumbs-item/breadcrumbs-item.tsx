import type { BreadcrumbsItemProps } from './breadcrumbs-item.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { breadcrumbsItemStyles } from './breadcrumbs-item.styles';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A breadcrumbs item.
 * This component is based on the `li` element.
 */
export const BreadcrumbsItem = component$<BreadcrumbsItemProps>((props) => {
  const { class: className, ...others } = props;

  const { size } = useContext(BreadcrumbsContext);

  return (
    <Breadcrumbs.Item class={twm(breadcrumbsItemStyles({ size }), className)} {...others}>
      <Slot />
    </Breadcrumbs.Item>
  );
});
