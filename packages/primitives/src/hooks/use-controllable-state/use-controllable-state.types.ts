import type { Signal } from '@builder.io/qwik';

export interface UseControllableStateParams<T> {
  /**
   * The controlled signal.
   */
  controlledSignal: Signal<T> | undefined;

  /**
   * Initial value for uncontrolled state.
   */
  uncontrolledValue: T | undefined;

  /**
   * Final value for uncontrolled state when `controlledSignal` and `uncontrolledValue` are not provided.
   */
  finalValue: T;
}
