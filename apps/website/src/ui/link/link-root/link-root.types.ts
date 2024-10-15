import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface LinkRootProps extends PropsOf<'a'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The URL that the link points to.
   */
  href: string;

  /**
   * Whether the link lead to external source.
   */
  external?: boolean;

  /**
   * Whether the link should open in a new tab.
   */
  openInNewTab?: boolean;

  /**
   * The size of the link.
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The color of the link.
   * @default "primary"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the link.
   */
  highContrast?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
