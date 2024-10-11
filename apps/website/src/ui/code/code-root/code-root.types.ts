import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface CodeRootProps extends PropsOf<'code'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The size of the code.
   * By default size will be inherit from parent.
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

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
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
