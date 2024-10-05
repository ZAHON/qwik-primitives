import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface TabsContentProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * A unique value that associates the content with a trigger.
   */
  value: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
