import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface TabsListProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * When `true`, keyboard navigation will loop from last tab to first, and vice versa.
   * @default true
   */
  loop?: boolean;

  /**
   * The alignment of the tabs.
   * @default "start"
   */
  justify?: 'start' | 'center' | 'end';

  /**
   * The CSS class for the element.
   */
  class?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
