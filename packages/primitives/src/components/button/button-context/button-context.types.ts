import type { ReadonlySignal } from '@builder.io/qwik';

export interface ButtonContextValue {
  /**
   * When `true`, prevents the user from interacting with the button.
   */
  isDisabled: ReadonlySignal<boolean | undefined>;

  /**
   * Whether the button is in a pending state.
   */
  isPending: ReadonlySignal<boolean | undefined>;
}
