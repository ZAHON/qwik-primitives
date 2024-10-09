import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface SeparatorRootProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The orientation of the separator.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * When `true`, signifies that it is purely visual, carries no semantic meaning
   * and ensures it is not present in the accessibility tree.
   */
  decorative?: boolean;

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
