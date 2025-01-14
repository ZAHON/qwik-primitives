import type { PropsOf, FunctionComponent, QRL, CSSProperties } from '@builder.io/qwik';

export interface CopyButtonRootProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   *
   */
  as?: FunctionComponent;

  /**
   * The value to be copied to the clipboard.
   */
  value: string;

  /**
   * The timeout for the copy operation in milliseconds.
   * @default 3000
   */
  timeout?: number;

  /**
   * The function to be called when the value is copied to the clipboard.
   */
  onCopyStatusChange$?: QRL<(status: 'copied' | 'error') => void>;

  /**
   * When `true`, prevents the user from interacting with the copy button.
   */
  disabled?: boolean;

  /**
   * The size of the copy button.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The shape of the copy button.
   * @default "icon'"
   */
  shape?: 'button' | 'icon';

  /**
   * The variant of the copy button.
   * @default "soft"
   */
  variant?: 'solid' | 'soft' | 'ghost';

  /**
   * The color of the copy button.
   * @default "default"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * Uses a higher contrast color for the copy button.
   */
  highContrast?: boolean;

  /**
   * Overrides the value of the copy button border radius inherited from the theme.
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
