import type { UseFocusTrapOptions } from './use-focus-trap.types';
import { component$, useSignal, Slot } from '@builder.io/qwik';
import { useFocusTrap } from '.';

const CONTAINER_TESTID = 'CONTAINER_TESTID';
const ACTIVE_BUTTON_TESTID = 'ACTIVE_BUTTON_TESTID';
const DEACTIVATE_BUTTON_TESTID = 'DEACTIVATE_BUTTON_TESTID';

export const UseFocusTrapTest = component$<UseFocusTrapOptions>((options) => {
  const containerRef = useSignal<HTMLDivElement | undefined>(undefined);

  const { active$, deactivate$ } = useFocusTrap(containerRef, options);

  return (
    <>
      <button type="button" data-testid={ACTIVE_BUTTON_TESTID} onClick$={active$}>
        Active focus trap
      </button>
      <button type="button" data-testid={DEACTIVATE_BUTTON_TESTID} onClick$={deactivate$}>
        Deactivate focus trap
      </button>
      <div ref={containerRef} data-testid={CONTAINER_TESTID}>
        <Slot />
      </div>
    </>
  );
});
