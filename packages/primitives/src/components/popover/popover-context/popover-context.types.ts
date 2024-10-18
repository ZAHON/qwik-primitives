import type { ReadonlySignal, Signal, QRL } from '@builder.io/qwik';

export interface PopoverContextValue {
  /**
   * The controlled open state of the popover.
   */
  isOpen: ReadonlySignal<boolean>;

  /**
   * The function that allow change controlled open state of the popover.
   */
  setIsOpen$: QRL<(open: boolean) => void>;

  /**
   * The unique id of the popover top layer.
   */
  topLayerId: string;

  /**
   * The reference to popover trigger DOM element.
   */
  triggerRef: Signal<HTMLElement | undefined>;

  /**
   * The reference to popover anchor DOM element.
   */
  anchorRef: Signal<HTMLElement | undefined>;

  /**
   * The unique id of the popover content.
   */
  contentId: Signal<string | undefined>;

  /**
   * The unique id of the popover title.
   */
  titleId: Signal<string | undefined>;

  /**
   * The unique id of the popover description.
   */
  descriptionId: Signal<string | undefined>;
}
