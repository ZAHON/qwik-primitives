import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface CardTitleProps extends PropsOf<'p'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The size of the title.
   * By default the size will be inherit from `Card.Root` component `size` prop.
   */
  size?: '1' | '2' | '3' | '4' | '5';

  /**
   * Uses a higher contrast color for the title.
   * @default true
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
