import { component$ } from '@builder.io/qwik';
import { Label } from 'qwik-primitives';

export const WithInputNumber = component$(() => {
  return (
    <>
      <h2>With input number</h2>
      <Label.Root>
        <span>Name:</span>
        <input type="number" />
      </Label.Root>
    </>
  );
});
