import type { ReadonlySignal, QRL, Signal } from '@builder.io/qwik';

export interface TextFieldContextValue {
  /**
   * The controlled value of the text field.
   */
  textFieldValue: ReadonlySignal<string>;

  /**
   * The function that allow change controlled value of the text field.
   */
  setTextFieldValue$: QRL<(value: string) => void>;

  /**
   * The initila value of the text field.
   */
  initilaTextFieldValue: string;

  /**
   * The name of the text field.
   * Submitted with its owning form as part of a name/value pair.
   */
  inputName: ReadonlySignal<string | undefined>;

  /**
   * When `true`, prevents the user from interacting with the text field.
   */
  isDisabled: ReadonlySignal<boolean | undefined>;

  /**
   * Whether the text field is invalid.
   */
  isInvalid: ReadonlySignal<boolean | undefined>;

  /**
   * When `true`, indicates that the user must fill the text field before the owning form can be submitted.
   */
  isRequired: ReadonlySignal<boolean | undefined>;

  /**
   * Whether the text field is read-only.
   */
  isReadOnly: ReadonlySignal<boolean | undefined>;

  /**
   * The unique id of the text field label.
   */
  labelId: Signal<string | undefined>;

  /**
   * The unique id of the text field input.
   */
  inputId: Signal<string | undefined>;

  /**
   * The unique id of the text field description.
   */
  descriptionId: Signal<string | undefined>;

  /**
   * The unique id of the text field error message.
   */
  errorMessageId: Signal<string | undefined>;
}
