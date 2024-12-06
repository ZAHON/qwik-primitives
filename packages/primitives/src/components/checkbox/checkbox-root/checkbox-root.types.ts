import type { PropsOf, FunctionComponent, Signal, QRL, CSSProperties } from '@builder.io/qwik';

export interface CheckboxRootProps extends PropsOf<'div'> {
  /**
   * Change the default rendered element for the one passed as, merging their props and behavior.
   *
   * Read our [Composition](https://github.com/ZAHON/qwik-primitives/blob/main/packages/primitives/docs/composition.md) guide for more details.
   */
  as?: FunctionComponent;

  /**
   * The checked state of the checkbox when it is initially rendered.
   * Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean | 'indeterminate';

  /**
   * The controlled checked state of the checkbox.
   * Must be used in conjunction with `onCheckedChange$`.
   */
  checked?: Signal<boolean | 'indeterminate'>;

  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange$?: QRL<(checked: boolean | 'indeterminate') => void>;

  /**
   * The name of the checkbox.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The value given as data when submitted with a `name`.
   * @default "on"
   */
  value?: string;

  /**
   * When `true`, prevents the user from interacting with the checkbox.
   */
  disabled?: boolean;

  /**
   * Whether the checkbox is invalid.
   */
  invalid?: boolean;

  /**
   * When `true`, indicates that the user must check the checkbox before the owning form can be submitted.
   */
  required?: boolean;

  /**
   * The inline style for the element.
   */
  style?: CSSProperties;
}
