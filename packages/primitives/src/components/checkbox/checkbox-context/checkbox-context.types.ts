import type { ReadonlySignal, QRL, Signal } from '@builder.io/qwik';

export interface CheckboxContextValue {
  /**
   * The controlled checked state of the checkbox.
   */
  isChecked: ReadonlySignal<boolean | 'indeterminate'>;

  /**
   * The function that allow change the controlled checked state of the checkbox.
   */
  setIsChecked$: QRL<(value: boolean | 'indeterminate') => void>;

  /**
   * The initila checked state of the checkbox.
   */
  initilaChecked: boolean | 'indeterminate';

  /**
   * The name of the text field.
   * Submitted with its owning form as part of a name/value pair.
   */
  inputName: ReadonlySignal<string | undefined>;

  /**
   * The value given as data when submitted with a `name`.
   */
  inputValue: ReadonlySignal<string | undefined>;

  /**
   * When `true`, prevents the user from interacting with the checkbox.
   */
  isDisabled: ReadonlySignal<boolean | undefined>;

  /**
   * Whether the checkbox is invalid.
   */
  isInvalid: ReadonlySignal<boolean | undefined>;

  /**
   * When `true`, indicates that the user must check the checkbox before the owning form can be submitted.
   */
  isRequired: ReadonlySignal<boolean | undefined>;

  /**
   * The unique id of the checkbox label.
   */
  labelId: Signal<string | undefined>;

  /**
   * The unique id of the checkbox input.
   */
  inputId: Signal<string | undefined>;

  /**
   * The unique id of the checkbox description.
   */
  descriptionId: Signal<string | undefined>;

  /**
   * The unique id of the checkbox error message.
   */
  errorMessageId: Signal<string | undefined>;
}
