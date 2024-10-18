import type { BreadcrumbsSeparatorProps } from './breadcrumbs-separator.types';
import { component$, useContext, Slot } from '@builder.io/qwik';
import { Breadcrumbs } from 'qwik-primitives';
import { twm } from '@/utilities/twm';
import { breadcrumbsSeparatorStyles } from './breadcrumbs-separator.styles';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * Used to visually separate breadcrumbs items.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `span` element.
 */
export const BreadcrumbsSeparator = component$<BreadcrumbsSeparatorProps>((props) => {
  const { class: className, ...others } = props;

  const { color } = useContext(BreadcrumbsContext);

  return (
    <Breadcrumbs.Separator class={twm(breadcrumbsSeparatorStyles({ color }), className)} {...others}>
      <Slot />
    </Breadcrumbs.Separator>
  );
});
