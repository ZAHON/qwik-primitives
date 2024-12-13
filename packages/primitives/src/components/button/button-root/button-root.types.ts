import type { PropsOf, FunctionComponent, CSSProperties } from '@builder.io/qwik';

export interface ButtonRootProps extends PropsOf<'button'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The behavior of the button when used in an HTML form.
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * When `true`, prevents the user from interacting with the button.
   */
  disabled?: boolean;

  /**
   * Whether the button is in a pending state.
   */
  pending?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
