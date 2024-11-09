import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface CalloutRootProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * Whether `callout` should be treated as an alert.
   */
  alert?: boolean;

  /**
   * The size of the callout.
   * @default "2"
   */
  size?: '1' | '2' | '3';

  /**
   * The color of the callout.
   * @default "default"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * Uses a higher contrast color for the callout.
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
