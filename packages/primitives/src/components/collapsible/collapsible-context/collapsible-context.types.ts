import type { Signal } from '@builder.io/qwik';

export interface CollapsibleContextValue {
  /**
   * The controlled open state of the collapsible.
   */
  isOpen: Signal<boolean>;

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
  panelId: string;

  /**
   * When `true`, prevents the user from interacting with the collapsible.
   */
  disabled?: boolean;
}
