import type { PropsOf, FunctionComponent, QRL, CSSProperties } from '@builder.io/qwik';

export interface AlertDialogContentProps extends PropsOf<'dialog'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * When `true`, tabbing from last focusable element will focus first focusable element
   * and `Shift + Tab` from first focusable element will focus last focusable element.
   * @default true
   */
  loop?: boolean;

  /**
   * By default, when the component is opened, focus is programmatically
   * moved to `AlertDialog.Cancel` to anticipate a response to the prompt.
   * When `AlertDialog.Cancel` not exist or is disabled the focus will be
   * move focus on the first focusable element.
   * To specify the element that should receive initial focus, add `data-qwik-primitives-auto-focus` attribute on this element.
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Whether to restore focus back to the `AlertDialog.Trigger` when the alert dialog is closed.
   * @default true
   */
  restoreFocus?: boolean;

  /**
   * Whether to prevent scrolling behind the alert dialog when it's opened.
   * @default true
   */
  preventScroll?: boolean;

  /**
   * Whether to close the alert dialog when the back is press on mobile devices.
   * @default true
   */
  closeOnBackPress?: boolean;

  /**
   * Whether to close the alert dialog when the escape key is down.
   * @default true
   */
  closeOnEscapeKeyDown?: boolean;

  /**
   * Whether to close the alert dialog when the outside is clicked.
   */
  closeOnClickOutside?: boolean;

  /**
   * Event handler called when the escape key is down.
   */
  onEscapeKeyDown$?: QRL<() => void>;

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component.
   */
  onClickOutside$?: QRL<() => void>;

  /**
   * Event handler called when the content is fully open.
   * If you animate the content when it opens this event handler was call after animation end.
   */
  onOpen$?: QRL<() => void>;

  /**
   * Event handler called when the content is fully close.
   * If you animate the content when it closes this event handler was call after animation end.
   */
  onClose$?: QRL<() => void>;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
