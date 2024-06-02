import type { Signal } from '@builder.io/qwik';

export interface CollapsibleContextValue {
  /**
   * The controlled open state of the collapsible.
   */
  isOpen: Signal<boolean>;

  /**
   * The controlled hide state of the collapsible content.
   */
  isContentHide: Signal<boolean>;

  /**
   * When `true`, prevents the user from interacting with the collapsible.
   */
  disabled?: boolean;

  /**
   * The unique id of the collapsible panel.
   */
  panelId: string;
}
