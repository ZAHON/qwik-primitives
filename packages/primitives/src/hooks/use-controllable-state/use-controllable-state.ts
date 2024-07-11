import type { ReadonlySignal } from '@builder.io/qwik';
import type { UseControllableStateParams } from './use-controllable-state.types';
import { useSignal, $ } from '@builder.io/qwik';

/**
 * Manage state of both controlled and uncontrolled components.
 */
export const useControllableState = <T>(params: UseControllableStateParams<T>) => {
  const { controlledSignal, uncontrolledValue, finalValue, onChange$ } = params;

  // If a controlled signal has been passed, we return it immediately.
  if (controlledSignal !== undefined) {
    const handleControlledChange$ = $((value: T) => {
      onChange$?.(value);
    });

    return [controlledSignal as ReadonlySignal<T>, handleControlledChange$, true] as const;
  }

  // If the controlled signal is not passed, we create our own signal and return it.
  const uncontrolledState = useSignal(uncontrolledValue !== undefined ? uncontrolledValue : finalValue);

  const handleUncontrolledChange$ = $((value: T) => {
    uncontrolledState.value = value;
    onChange$?.(value);
  });

  return [uncontrolledState as ReadonlySignal<T>, handleUncontrolledChange$, false] as const;
};
