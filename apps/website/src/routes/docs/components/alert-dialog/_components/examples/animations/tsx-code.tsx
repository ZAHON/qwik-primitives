import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';
import styles from './styles.css?inline';

export const AlertDialogDemo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>Open alert dialog</AlertDialog.Trigger>
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title>Alert dialog title</AlertDialog.Title>
        <AlertDialog.Description>Alert dialog description</AlertDialog.Description>
        <AlertDialog.Cancel>Alert dialog cancel</AlertDialog.Cancel>
        <AlertDialog.Action>Alert dialog action</AlertDialog.Action>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
