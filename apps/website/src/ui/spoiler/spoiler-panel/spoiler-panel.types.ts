import type { PropsOf, FunctionComponent, QRL, CSSProperties } from '@builder.io/qwik';

export interface SpoilerPanelProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The minimum height of the panel when spolier is closed.
   * @default "0px"
   */
  minHeight?: string;

  /**
   * Event handler called when the panel is fully open.
   * If you animate the size of the panel when it opens this event handler was call after animation end.
   */
  onOpen$?: QRL<() => void>;

  /**
   * Event handler called when the panel is fully close.
   * If you animate the size of the panel when it closes this event handler was call after animation end.
   */
  onClose$?: QRL<() => void>;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
