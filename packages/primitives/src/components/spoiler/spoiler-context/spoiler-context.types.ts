import type { ReadonlySignal, QRL, Signal } from '@builder.io/qwik';

export interface SpoilerContextValue {
  /**
   * The controlled open state of the spoiler.
   */
  isOpen: ReadonlySignal<boolean>;

  /**
   * The function that allow change controlled open state of the spoiler.
   */
  setIsOpen$: QRL<(open: boolean) => void>;

  /**
   * When `true`, prevents the user from interacting with the spoiler.
   */
  isDisabled: ReadonlySignal<boolean | undefined>;

  /**
   * The unique id of the spoiler panel.
   */
  panelId: Signal<string | undefined>;

  /**
   * The height of the spoiler content.
   */
  contentHeight: Signal<number | undefined>;
}
