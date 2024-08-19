import type { PropsOf, FunctionComponent, QRL, CSSProperties } from '@builder.io/qwik';

export interface DialogContentProps extends PropsOf<'dialog'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * Whether to prevent scrolling behind the dialog when it's opened.
   * @default true
   */
  preventScroll?: boolean;

  /**
   * Whether to trap focus inside the dialog when it's opened.
   * @default true
   */
  trapFocus?: boolean;

  /**
   * Whether to close the dialog when the escape key is down.
   * @default true
   */
  closeOnEscapeKeyDown?: boolean;

  /**
   * Whether to close the dialog when the outside is clicked.
   * @default true
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
