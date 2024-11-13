import { component$, useSignal, $ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

export const AlertDialogDemo = component$(() => {
  const restoreFocusElementRef = useSignal<HTMLButtonElement | undefined>(undefined);

  const handleClose$ = $(() => {
    // Using `setTimeout` is required, without it the element will not receive focus.
    setTimeout(() => {
      if (restoreFocusElementRef.value) {
        restoreFocusElementRef.value.focus();
      }
    });
  });

  return (
    <>
      <button ref={restoreFocusElementRef} type="button">
        Button (focus will be move on this element after close dialog)
      </button>

      <AlertDialog.Root>
        <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
        <AlertDialog.Content restoreFocus={false} onClose$={handleClose$}>
          <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
          <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
          <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
});
