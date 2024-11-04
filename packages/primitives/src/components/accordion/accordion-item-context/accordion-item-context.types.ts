import type { ReadonlySignal, Signal, QRL } from '@builder.io/qwik';

export interface AccordionItemContextValue {
  /**
   * A unique value for the accordion item.
   */
  value: string;

  /**
   * The controlled open state of the accordion item.
   */
  isOpen: ReadonlySignal<boolean>;

  /**
   * The controlled hide state of the accordion panel.
   */
  isPanelHide: Signal<boolean>;

  /**
   * The controlled status state of the accordion panel.
   */
  panelStatus: Signal<'open' | 'closed' | 'indeterminate'>;

  /**
   * The unique id of the accordion trigger.
   */
  triggerId: Signal<string | undefined>;

  /**
   * The unique id of the accordion panel.
   */
  panelId: Signal<string | undefined>;

  /**
   * When `true`, prevents the user from interacting with the accordion item.
   */
  isDisabled: ReadonlySignal<boolean | undefined>;

  /**
   * Event handler called when the accordion item open.
   */
  onItemOpen$: QRL<(itemValue: string) => void>;

  /**
   * Event handler called when the accordion item close.
   */
  onItemClose$: QRL<(itemValue: string) => void>;
}
