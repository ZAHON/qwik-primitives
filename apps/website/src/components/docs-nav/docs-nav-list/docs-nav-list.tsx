import type { DocsNavListProps } from './docs-nav-list.types';
import { component$, Slot } from '@builder.io/qwik';
import { docsNavListStyles } from './docs-nav-list.styles';

export const DocsNavList = component$<DocsNavListProps>((props) => {
  const { 'aria-labelledby': ariaLabelledby } = props;

  return (
    <ul aria-labelledby={ariaLabelledby ? `docs-nav-${ariaLabelledby}` : undefined} class={docsNavListStyles()}>
      <Slot />
    </ul>
  );
});
