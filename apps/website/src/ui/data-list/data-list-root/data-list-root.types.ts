import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface DataListRootProps extends PropsOf<'dl'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The size of the data list.
   * @default "2"
   */
  size?: '1' | '2' | '3';

  /**
   * The orientation of the data list.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
