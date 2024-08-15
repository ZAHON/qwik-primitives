import { component$ } from '@builder.io/qwik';
import { Dialog } from 'qwik-primitives';

export const StackedDialogs = component$(() => {
  return (
    <>
      <h2>Stacked dialogs</h2>
      <Dialog.Root>
        <Dialog.Trigger>Open dialog 1</Dialog.Trigger>
        <Dialog.Content style={{ width: '380px', backgroundColor: 'black' }}>
          <Dialog.Title>Dialog title 1</Dialog.Title>
          <Dialog.Description>Dialog description 1</Dialog.Description>
          <Dialog.Close>Close dialog 1</Dialog.Close>

          <Dialog.Root>
            <Dialog.Trigger>Open dialog 2</Dialog.Trigger>
            <Dialog.Content style={{ width: '340px', backgroundColor: 'cadetblue' }}>
              <Dialog.Title>Dialog title 2</Dialog.Title>
              <Dialog.Description>Dialog description 2</Dialog.Description>
              <Dialog.Close>Close dialog 2</Dialog.Close>

              <Dialog.Root>
                <Dialog.Trigger>Open dialog 3</Dialog.Trigger>
                <Dialog.Content style={{ width: '300px', backgroundColor: 'violet' }}>
                  <Dialog.Title>Dialog title 3</Dialog.Title>
                  <Dialog.Description>Dialog description 3</Dialog.Description>
                  <Dialog.Close>Close dialog 3</Dialog.Close>
                </Dialog.Content>
              </Dialog.Root>
            </Dialog.Content>
          </Dialog.Root>
        </Dialog.Content>
      </Dialog.Root>
      <div style={{ height: '200vh' }} />
    </>
  );
});
