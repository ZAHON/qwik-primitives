import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface LabelRootProps extends PropsOf<'label'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The id of the element the label is associated with.
   */
  for?: string;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}