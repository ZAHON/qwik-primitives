import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertDialog } from 'qwik-primitives';
import styles from './styles.css?inline';

export const AlertDialogDemo = component$(() => {
  useStyles$(styles);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger class="alert-dialog-trigger">Revoke access</AlertDialog.Trigger>
      <AlertDialog.Content class="alert-dialog-content">
        <AlertDialog.Title class="alert-dialog-title">Revoke access</AlertDialog.Title>
        <AlertDialog.Description class="alert-dialog-description">
          Are you sure? This application will no longer be accessible and any existing sessions will be expired.
        </AlertDialog.Description>
        <div class="alert-dialog-footer">
          <AlertDialog.Cancel class="alert-dialog-cancel">Cancel</AlertDialog.Cancel>
          <AlertDialog.Action class="alert-dialog-action">Revoke access</AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
});
