import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface BaseButtonRootProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * When `true`, prevents the user from interacting with button.
   */
  disabled?: boolean;

  /**
   * The type of the button.
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * The size of the button.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The shape of the button.
   * @default "button'"
   */
  shape?: 'button' | 'icon';

  /**
   * The variant of the button.
   * @default "solid"
   */
  variant?: 'solid' | 'soft' | 'ghost';

  /**
   * The color of the button.
   * @default "primary"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * Uses a higher contrast color for the button.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the button border radius inherited from the theme.
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
