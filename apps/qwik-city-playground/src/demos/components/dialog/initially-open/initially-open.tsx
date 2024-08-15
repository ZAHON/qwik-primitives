import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

export const InitiallyOpen = component$(() => {
  const isOpen = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      isOpen.value = true;
    },
    { strategy: 'document-ready' }
  );

  return (
    <>
      <h2>Initially open</h2>
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
