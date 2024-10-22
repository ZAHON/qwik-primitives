import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface HeadingRootProps extends PropsOf<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The level of the heading, determines which tag will be used (h1-h6).
   * @default "1"
   */
  level?: '1' | '2' | '3' | '4' | '5' | '6';

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
