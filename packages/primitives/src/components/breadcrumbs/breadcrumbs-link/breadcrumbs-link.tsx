import type { BreadcrumbsLinkProps } from './breadcrumbs-link.types';
import { component$, useContext, useComputed$, sync$, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A breadcrumbs link.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `a` element.
 */
export const BreadcrumbsLink = component$<BreadcrumbsLinkProps>((props) => {
  const { as, disabled, onClick$, ...others } = props;

  const { isDisabled } = useContext(BreadcrumbsContext);

  const isLinkDisabled = useComputed$(() => disabled ?? isDisabled.value);

  const handleClickSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    const disabled = currentTarget.getAttribute('aria-disabled') === 'true';
    if (disabled) event.preventDefault();
  });

  const Component = as || 'a';

  return (
    <Component
      aria-disabled={isLinkDisabled.value ? true : undefined}
      data-qwik-primitives-breadcrumbs-link=""
      data-scope="breadcrumbs"
      data-disabled={isLinkDisabled.value ? '' : undefined}
      onClick$={[onClick$, handleClickSync$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
