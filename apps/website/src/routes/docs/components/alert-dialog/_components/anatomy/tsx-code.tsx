import { component$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

export const AlertDialogDemo = component$(() => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger />
      <AlertDialog.Content>
        <AlertDialog.Title />
        <AlertDialog.Description />
        <AlertDialog.Cancel />
        <AlertDialog.Action />
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
