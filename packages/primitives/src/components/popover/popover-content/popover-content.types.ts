import type { PropsOf, FunctionComponent, QRL, CSSProperties, Signal } from '@builder.io/qwik';

export interface PopoverContentProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The preferred side of the anchor to render against when open.
   * Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @default "bottom"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The distance in pixels from the anchor.
   * @default 0
   */
  sideOffset?: number;

  /**
   * The preferred alignment against the anchor.
   * May change when collisions occur.
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';

  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: number;

  /**
   * When `true`, overrides the `side` and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: boolean;

  /**
   * The element used as the collision boundary.
   * By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @default []
   */
  collisionBoundary?: Signal<HTMLElement | undefined> | Signal<HTMLElement | undefined>[];

  /**
   * The distance from the boundary edges where collision detection should occur in pixels .
   * Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @default 0
   */
  collisionPadding?: number | Partial<Record<'start' | 'center' | 'end', number>>;

  /**
   * The padding in pixels between the arrow and the edges of the content.
   * If your content has border-radius, this will prevent it from overflowing the corners.
   * @default 0
   */
  arrowPadding?: number;

  /**
   * The sticky behavior on the align axis.
   * "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst
   * "always" will keep the content in the boundary regardless.
   * @default "partial"
   */
  sticky?: 'partial' | 'always';

  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   */
  hideWhenDetached?: boolean;

  /**
   * When `true`, tabbing from last focusable element will focus first focusable element
   * and `Shift + Tab` from first focusable element will focus last focusable element.
   * @default true
   */
  loop?: boolean;

  /**
   * Whether to auto focus the first focusable element in the component when it's opened.
   * To specify the element that should receive initial focus, add `data-qwik-primitives-auto-focus` attribute on this element.
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Whether to restore focus back to the `Popover.Trigger` when the popover is closed.
   * @default true
   */
  restoreFocus?: boolean;

  /**
   * Whether to close the popover when the escape key is down.
   * @default true
   */
  closeOnEscapeKeyDown?: boolean;

  /**
   * Whether to close the popover when the outside is clicked.
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
