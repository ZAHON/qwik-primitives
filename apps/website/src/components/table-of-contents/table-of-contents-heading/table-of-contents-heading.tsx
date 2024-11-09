import { component$ } from '@builder.io/qwik';
import { tableOfContentsHeadingStyles } from './table-of-contents-heading.styles';

export const TableOfContentsHeading = component$(() => {
  return (
    <h4 id="table-of-contents-heading" aria-label="Table of contents" class={tableOfContentsHeadingStyles()}>
      Quick nav
    </h4>
  );
});
