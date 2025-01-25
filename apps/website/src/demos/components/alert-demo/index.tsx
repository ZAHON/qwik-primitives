import { component$, useStyles$ } from '@builder.io/qwik';
import { Alert } from 'qwik-primitives';
import styles from './styles.css?inline';

export const AlertDemo = component$(() => {
  useStyles$(styles);

  return (
    <Alert.Root class="alert-root">
      Access denied. Please contact the network administrator to view this page.
    </Alert.Root>
  );
});
