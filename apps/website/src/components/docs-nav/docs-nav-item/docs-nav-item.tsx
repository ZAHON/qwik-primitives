import { component$, Slot } from '@builder.io/qwik';

export const DocsNavItem = component$(() => {
  return (
    <li>
      <Slot />
    </li>
  );
});
