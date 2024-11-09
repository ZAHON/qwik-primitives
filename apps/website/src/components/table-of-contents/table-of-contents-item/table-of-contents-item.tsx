import { component$, Slot } from '@builder.io/qwik';

export const TableOfContentsItem = component$(() => {
  return (
    <li>
      <Slot />
    </li>
  );
});
