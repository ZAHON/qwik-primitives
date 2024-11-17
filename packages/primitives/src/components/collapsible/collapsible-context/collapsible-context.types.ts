import type { ReadonlySignal, QRL, Signal } from '@builder.io/qwik';

export interface CollapsibleContextValue {
  /**
   * The controlled open state of the collapsible.
   */
  isOpen: ReadonlySignal<boolean>;

  /**
   * The function that allow change controlled open state of the collapsible.
   */
  setIsOpen$: QRL<(open: boolean) => void>;

  /**
   * The controlled hide state of the collapsible panel.
   */
  isPanelHide: Signal<boolean>;

  /**
   * The controlled status state of the collapsible panel.
   */
  panelStatus: Signal<'open' | 'closed' | 'indeterminate'>;

  /**
   * The unique id of the collapsible panel.
   */
  panelId: Signal<string | undefined>;

  /**
   * When `true`, prevents the user from interacting with the collapsible.
   */
  disabled: boolean;
}
