import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface IconButtonRootProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * When `true`, prevents the user from interacting with icon button.
   */
  disabled?: boolean;

  /**
   * The size of the icon button.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The variant of the icon button.
   * @default "ghost"
   */
  variant?: 'solid' | 'soft' | 'ghost';

  /**
   * The color of the icon button.
   * @default "default"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the icon button.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the icon button border radius inherited from the theme.
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
