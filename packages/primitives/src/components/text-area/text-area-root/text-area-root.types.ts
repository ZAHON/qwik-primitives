import type { PropsOf, FunctionComponent, Signal, QRL, CSSProperties } from '@builder.io/qwik';

export interface TextAreaRootProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The default value of the text area when initially rendered.
   * Use when you do not need to control its the value.
   */
  defaultValue?: string;

  /**
   * The controlled value of the text area.
   * Must be used in conjunction with `onValueChange$`.
   */
  value?: Signal<string>;

  /**
   * Event handler called when the value of the text area changes.
   */
  onValueChange$?: QRL<(value: string) => void>;

  /**
   * The name of the text area.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * When `true`, prevents the user from interacting with the text area.
   */
  disabled?: boolean;

  /**
   * Whether the text area is invalid.
   */
  invalid?: boolean;

  /**
   * When `true`, indicates that the user must fill the text area before the owning form can be submitted.
   */
  required?: boolean;

  /**
   * Whether the text area is read-only.
   */
  readOnly?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
