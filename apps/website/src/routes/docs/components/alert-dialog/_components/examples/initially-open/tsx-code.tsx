import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

export const AlertDialogDemo = component$(() => {
  const isOpen = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      isOpen.value = true;
    },
    { strategy: 'document-ready' }
  );

  return (
    <AlertDialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
