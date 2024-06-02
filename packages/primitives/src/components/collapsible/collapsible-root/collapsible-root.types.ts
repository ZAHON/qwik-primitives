import type { PropsOf, Signal, QRL } from '@builder.io/qwik';

export interface CollapsibleRootProps extends PropsOf<'div'> {
  /**
   * The open state of the collapsible when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the collapsible.
   */
  open?: Signal<boolean>;

  /**
   * Event handler called when the open state of the collapsible changes.
   */
  onOpenChange$?: QRL<(open: boolean) => void>;

  /**
   * When `true`, prevents the user from interacting with the collapsible.
   */
  disabled?: boolean;
}
