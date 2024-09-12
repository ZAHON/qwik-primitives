import type { QRL } from '@builder.io/qwik';

export interface UseFocusTrapOptions {
  /**
   * When `true`, tabbing from last item will focus first focusable element
   * and `Shift + Tab` from first item will focus last focusable element.
   * @default true
   */
  loop?: boolean;

  /**
   * Whether to auto focus the first focusable element in the focus trap when is active.
   * To specify the element that should receive initial focus, add `data-qwik-primitives-auto-focus` attribute on this element.
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Whether to restore focus back to the element that was focused when the focus trap activated, after the focus trap is deactivate.
   * @default true
   */
  restoreFocus?: boolean;
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
