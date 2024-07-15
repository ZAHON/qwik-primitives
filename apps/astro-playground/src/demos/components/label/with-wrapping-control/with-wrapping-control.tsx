import { component$ } from '@builder.io/qwik';
import { Label } from 'qwik-primitives';

export const WithWrappingControl = component$(() => {
  return (
    <>
      <h2>With wrapping control</h2>
      <Label.Root>
        <button onClick$={() => window.alert('clicked')}>Control</button> Label
      </Label.Root>
    </>
  );
});
