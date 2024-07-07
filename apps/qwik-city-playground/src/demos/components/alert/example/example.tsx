import { component$ } from '@builder.io/qwik';
import { Alert } from 'qwik-primitives';

export const Example = component$(() => {
  return (
    <>
      <h2>Example</h2>
      <Alert.Root>Access denied. Please contact the network administrator to view this page.</Alert.Root>
    </>
  );
});
