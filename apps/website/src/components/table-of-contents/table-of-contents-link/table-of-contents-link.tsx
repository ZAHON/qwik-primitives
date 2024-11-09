import type { TableOfContentsLinkProps } from './table-of-contents-link.types';
import { component$, Slot } from '@builder.io/qwik';
import { tableOfContentsLinkStyles } from './table-of-contents-link.styles';

export const TableOfContentsLink = component$<TableOfContentsLinkProps>((props) => {
  return (
    <a class={tableOfContentsLinkStyles()} {...props}>
      <Slot />
    </a>
  );
});
