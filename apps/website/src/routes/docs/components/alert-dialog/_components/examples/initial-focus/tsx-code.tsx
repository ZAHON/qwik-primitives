import { component$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';

export const AlertDialogDemo = component$(() => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>

        <label for="first-input">First input</label>
        <input id="first-input" type="text" placeholder="First input" />

        <label for="second-input">Second input (will have initial focus)</label>
        <input
          data-qwik-primitives-auto-focus=""
          id="second-input"
          type="text"
          placeholder="Second input (will have initial focus)"
        />

        <label for="third-input">Third input</label>
        <input id="third-input" type="text" placeholder="Third input" />

        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
