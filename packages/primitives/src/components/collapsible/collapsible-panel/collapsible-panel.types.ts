import type { PropsOf, QRL, CSSProperties } from '@builder.io/qwik';

export interface CollapsiblePanelProps extends PropsOf<'div'> {
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
   * The inline style for the element.
   */
  style?: CSSProperties;
}
