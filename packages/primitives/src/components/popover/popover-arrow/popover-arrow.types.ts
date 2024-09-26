import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface PopoverArrowProps extends PropsOf<'svg'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The width of the arrow in pixels.
   * @default 10
   */
  width?: number;

  /**
   * The height of the arrow in pixels.
   * @default 5
   */
  height?: number;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
