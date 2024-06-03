import type { Signal } from '@builder.io/qwik';
import type { UseControllableStateParams } from './use-controllable-state.types';
import { useSignal } from '@builder.io/qwik';

export const useControllableState = <T>(params: UseControllableStateParams<T>) => {
  const { controlledSignal, uncontrolledValue, finalValue } = params;

  // If a controlled signal has been passed, we return it immediately.
  if (controlledSignal !== undefined) return controlledSignal;

  // If the controlled signal is not passed, we create our own signal and return it.
  const uncontrolledState = useSignal(uncontrolledValue !== undefined ? uncontrolledValue : finalValue);
  return uncontrolledState as Signal<T>;
};
