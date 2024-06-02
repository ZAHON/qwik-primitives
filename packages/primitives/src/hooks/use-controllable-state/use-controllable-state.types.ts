import type { Signal } from '@builder.io/qwik';

export interface UseControllableStateParams<T> {
  /**
   * Value for controlled state.
   */
  prop?: Signal<T> | undefined;

  /**
   * Initial value for uncontrolled state.
   */
  defaultProp?: T | undefined;

  /**
   * Final value for uncontrolled state when value and defaultValue are not provided.
   */
  finalProp?: T;
}
