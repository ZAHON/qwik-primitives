import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface TextAreaInputProps extends PropsOf<'textarea'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * Whether the form should be submitted when the user presses the `enter` key.
   */
  submitOnEnter?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
