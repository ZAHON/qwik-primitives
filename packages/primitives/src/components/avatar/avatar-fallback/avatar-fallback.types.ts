import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface AvatarFallbackProps extends PropsOf<'span'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * Useful for delaying rendering so it only appears for those with slower connections.
   */
  delayMs?: number;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
