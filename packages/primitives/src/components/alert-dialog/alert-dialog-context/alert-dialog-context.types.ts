import type { ReadonlySignal, Signal, QRL } from '@builder.io/qwik';

export interface AlertDialogContextValue {
  /**
   * The controlled open state of the alert dialog.
   */
  isOpen: ReadonlySignal<boolean>;

  /**
   * The function that allow change controlled open state of the alert dialog.
   */
  setIsOpen$: QRL<(open: boolean) => void>;

  /**
   * The reference to alert dialog trigger DOM element.
   */
  triggerRef: Signal<HTMLElement | undefined>;

  /**
   * The unique id of the alert dialog content.
   */
  contentId: Signal<string | undefined>;

  /**
   * The unique id of the alert dialog title.
   */
  titleId: Signal<string | undefined>;

  /**
   * The unique id of the alert dialog description.
   */
  descriptionId: Signal<string | undefined>;
}
