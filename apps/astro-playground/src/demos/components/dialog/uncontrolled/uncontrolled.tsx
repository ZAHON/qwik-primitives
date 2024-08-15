import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

export const Uncontrolled = component$(() => {
  return (
    <>
      <h2>Uncontrolled</h2>
      <Dialog.Root>
        <Dialog.Trigger>Open dialog</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Dialog title</Dialog.Title>
          <Dialog.Description>Dialog description</Dialog.Description>
          <Dialog.Close>Close dialog</Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
      <div style={{ height: '200vh' }} />
    </>
  );
});
