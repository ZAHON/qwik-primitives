import { component$, Slot } from '@builder.io/qwik';

export const TableOfContentsList = component$(() => {
  return (
    <ul>
      <Slot />
    </ul>
  );
});
