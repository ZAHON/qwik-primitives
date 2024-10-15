import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface ButtonLinkRootProps extends PropsOf<'a'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The URL that the button link points to.
   */
  href: string;

  /**
   * Whether the button link lead to external source.
   */
  external?: boolean;

  /**
   * Whether the button link should open in a new tab.
   */
  openInNewTab?: boolean;

  /**
   * The size of the button link.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The shape of the button link.
   * @default "button'"
   */
  shape?: 'button' | 'icon';

  /**
   * The variant of the button link.
   * @default "solid"
   */
  variant?: 'solid' | 'soft' | 'ghost';

  /**
   * The color of the button link.
   * @default "primary"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the button link.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the button link border radius inherited from the theme.
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
