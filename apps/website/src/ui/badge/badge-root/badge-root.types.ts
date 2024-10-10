import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface BadgeRootProps extends PropsOf<'span'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The size of the badge.
   * @default "1"
   */
  size?: '1' | '2' | '3';

  /**
   * The variant of the badge.
   * @default "soft"
   */
  variant?: 'solid' | 'soft';

  /**
   * The color of the badge.
   * @default "primary"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the badge.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the badge border radius inherited from the theme.
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
