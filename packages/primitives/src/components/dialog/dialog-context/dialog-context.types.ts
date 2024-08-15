import type { ReadonlySignal, Signal, QRL } from '@builder.io/qwik';

export interface DialogContextValue {
  /**
   * The controlled open state of the dialog.
   */
  isOpen: ReadonlySignal<boolean>;

  /**
   * The function that allow change controlled open state of the dialog.
   */
  setIsOpen$: QRL<(open: boolean) => void>;

  /**
   * The reference to dialog trigger DOM element.
   */
  triggerRef: Signal<HTMLElement | undefined>;

  /**
   * The unique id of the dialog content.
   */
  contentId: Signal<string | undefined>;

  /**
   * The unique id of the dialog title.
   */
  titleId: Signal<string | undefined>;

  /**
   * The unique id of the dialog description.
   */
  descriptionId: Signal<string | undefined>;
}
