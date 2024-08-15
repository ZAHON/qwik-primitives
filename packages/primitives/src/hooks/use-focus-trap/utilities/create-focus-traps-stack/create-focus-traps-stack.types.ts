import type { QRL } from '@builder.io/qwik';

export interface FocusTrapAPI {
  /**
   * When `true`, the focus trap will be paused.
   */
  paused: boolean;

  /**
   * The function that allow pause focus trap.
   */
  pause: QRL<() => void>;

  /**
   * The function that allow resume focus trap.
   */
  resume: QRL<() => void>;
}
