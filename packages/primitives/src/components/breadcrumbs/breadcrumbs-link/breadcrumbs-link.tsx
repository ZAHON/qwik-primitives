import type { BreadcrumbsLinkProps } from './breadcrumbs-link.types';
import { component$, useContext, sync$, Slot } from '@builder.io/qwik';
import { BreadcrumbsContext } from '../breadcrumbs-context';

/**
 * A breadcrumbs link.
 * Must be rendered inside `Breadcrumbs.Item`.
 * This component is based on the `a` element.
 */
export const BreadcrumbsLink = component$<BreadcrumbsLinkProps>((props) => {
  const { as, href, disabled, onClick$, ...others } = props;

  const { disabled: breadcrumbsDisabled } = useContext(BreadcrumbsContext);

  const handleClickSync$ = sync$((event: MouseEvent, currentTarget: HTMLElement) => {
    const disabled = currentTarget.getAttribute('aria-disabled') === 'true';
    if (disabled) event.preventDefault();
  });

  const Component = as || 'a';

  return (
    <Component
      role={(disabled ?? breadcrumbsDisabled) ? 'link' : undefined}
      href={(disabled ?? breadcrumbsDisabled) ? undefined : href}
      aria-disabled={(disabled ?? breadcrumbsDisabled) ? true : undefined}
      data-qwik-primitives-breadcrumbs-link=""
      data-scope="breadcrumbs"
      data-part="link"
      data-disabled={(disabled ?? breadcrumbsDisabled) ? '' : undefined}
      onClick$={[onClick$, handleClickSync$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
