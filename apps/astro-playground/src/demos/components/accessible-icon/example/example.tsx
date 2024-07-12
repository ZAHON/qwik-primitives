import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { AccessibleIcon } from 'qwik-primitives';

const CrossIcon = component$<PropsOf<'svg'>>((props) => {
  return (
    <svg viewBox="0 0 32 32" width={24} height={24} fill="none" stroke="currentColor" {...props}>
      <path d="M2 30 L30 2 M30 30 L2 2" />
    </svg>
  );
});

export const Example = component$(() => {
  return (
    <>
      <h2>Example</h2>
      <button type="button">
        <AccessibleIcon.Root as={CrossIcon} label="Close" />
      </button>
    </>
  );
});
