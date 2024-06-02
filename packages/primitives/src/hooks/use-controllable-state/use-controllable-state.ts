import type { Signal } from '@builder.io/qwik';
import type { UseControllableStateParams } from './use-controllable-state.types';
import { useSignal } from '@builder.io/qwik';

export const useControllableState = <T>(params: UseControllableStateParams<T>) => {
  const { prop, defaultProp, finalProp } = params;

  const uncontrolledState = useSignal(defaultProp !== undefined ? defaultProp : finalProp);

  return prop !== undefined ? prop : (uncontrolledState as Signal<T>);
};
