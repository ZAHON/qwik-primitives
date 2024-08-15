import { component$, useSignal } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

export const Controlled = component$(() => {
  const isOpen = useSignal(false);

  return (
    <>
      <h2>Controlled</h2>
      <Dialog.Root open={isOpen} onOpenChange$={() => (isOpen.value = !isOpen.value)}>
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
