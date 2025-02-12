import type { ReadonlySignal } from '@builder.io/qwik';

export interface SkeletonContextValue {
  /**
   * Toggles whether to hide the content and display the fallback.
   */
  isLoading: ReadonlySignal<boolean | undefined>;
}
