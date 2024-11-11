import type { ComponentKeyboardInteractionsProps } from './component-keyboard-interactions.types';
import { component$ } from '@builder.io/qwik';
import { ComponentKeyboardInteractionsDataList } from './component-keyboard-interactions-data-list';
import { ComponentKeyboardInteractionsTable } from './component-keyboard-interactions-table';

export const ComponentKeyboardInteractions = component$<ComponentKeyboardInteractionsProps>((props) => {
  return (
    <>
      <ComponentKeyboardInteractionsDataList {...props} />
      <ComponentKeyboardInteractionsTable {...props} />
    </>
  );
});
