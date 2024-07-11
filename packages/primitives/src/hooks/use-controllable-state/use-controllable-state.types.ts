import type { Signal, QRL } from '@builder.io/qwik';

export interface UseControllableStateParams<T> {
  /**
   * The controlled signal.
   */
  controlledSignal?: Signal<T> | undefined;

  /**
   * Initial value for uncontrolled state.
   */
  uncontrolledValue?: T | undefined;

  /**
   * Final value for state when `controlledSignal` and `uncontrolledValue` are not provided.
   */
  finalValue: T;

  /**
   * Controlled state onChange handler.
   */
  onChange$?: QRL<(value: T) => void> | undefined;
}
