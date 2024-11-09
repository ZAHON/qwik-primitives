import { component$, Slot } from '@builder.io/qwik';
import { tableOfContentsSubListStyles } from './table-of-contents-sub-list.styles';

export const TableOfContentsSubList = component$(() => {
  return (
    <ul class={tableOfContentsSubListStyles()}>
      <Slot />
    </ul>
  );
});
