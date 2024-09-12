import type { Signal, QRL } from '@builder.io/qwik';

export interface AlertDialogRootProps {
  /**
   * The open state of the alert dialog when it is initially rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the alert dialog.
   * Must be used in conjunction with `onOpenChange$`.
   */
  open?: Signal<boolean>;

  /**
   * Event handler called when the open state of the alert dialog changes.
   */
  onOpenChange$?: QRL<(open: boolean) => void>;
}
