import type { ListItemProps } from './list-item.types';
import { component$, Slot } from '@builder.io/qwik';

export const ListItem = component$<ListItemProps>((props) => {
  return (
    <li {...props}>
      <Slot />
    </li>
  );
});
