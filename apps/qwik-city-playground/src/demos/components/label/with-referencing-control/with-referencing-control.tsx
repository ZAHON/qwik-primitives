import { component$ } from '@builder.io/qwik';
import { Label } from 'qwik-primitives';

export const WithReferencingControl = component$(() => {
  return (
    <>
      <h2>With referencing control</h2>
      <button id="control" onClick$={() => window.alert('clicked')}>
        Control
      </button>
      <Label.Root for="control">Label</Label.Root>
    </>
  );
});
