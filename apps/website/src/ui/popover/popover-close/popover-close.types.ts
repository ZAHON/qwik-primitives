import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface PopoverCloseProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * When `true`, prevents the user from interacting with the close button.
   */
  disabled?: boolean;

  /**
   * The size of the close button.
   * By default the size will be inherit from `Popover.Content` component `size` prop.
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The shape of the close button.
   * @default "button'"
   */
  shape?: 'button' | 'icon';

  /**
   * The variant of the close button.
   * @default "soft"
   */
  variant?: 'solid' | 'soft' | 'ghost';

  /**
   * The color of the close button.
   * @default "default"
   */
  color?: 'default' | 'primary';

  /**
   * Uses a higher contrast color for the close button.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the close button border radius inherited from the theme.
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
