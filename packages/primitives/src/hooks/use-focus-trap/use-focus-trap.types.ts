import type { QRL } from '@builder.io/qwik';

export interface UseFocusTrapOptions {
  /**
   * When `true`, tabbing from last item will focus first tabbable
   * and shift+tab from first item will focus last tababble.
   * @default false
   */
  loop?: boolean;
}

export interface FocusTrap {
  /**
   * When `true`, the focus trap will be paused.
   */
  paused: boolean;

  /**
   * The function that allow pause focus trap.
   */
  pause: QRL<(this: FocusTrap) => void>;

  /**
   * The function that allow resume focus trap.
   */
  resume: QRL<(this: FocusTrap) => void>;
}
