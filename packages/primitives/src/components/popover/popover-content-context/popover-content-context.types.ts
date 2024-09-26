import type { Signal } from '@builder.io/qwik';

export interface PopoverContentContextValue {
  /**
   * The reference to popover arrow positioner anchor DOM element.
   */
  arrowPositionerRef: Signal<HTMLElement | undefined>;

  /**
   * The width of the popover anchor in pixels.
   */
  arrowWidth: Signal<number | undefined>;

  /**
   * The height of the popover anchor in pixels.
   */
  arrowHeight: Signal<number | undefined>;

  /**
   * The x postition of the popover anchor.
   */
  arrowX: Signal<number | undefined>;

  /**
   * The y postition of the popover anchor.
   */
  arrowY: Signal<number | undefined>;

  /**
   * Whether, should hide popover arrow.
   */
  shouldHideArrow: Signal<boolean | undefined>;

  /**
   * Whether, should measure popover arrow.
   */
  shouldMeasureArrow: Signal<boolean | undefined>;

  /**
   * The placed side of the popover content.
   */
  placedSide: Signal<'top' | 'left' | 'bottom' | 'right' | undefined>;
}
