import type { ReadonlySignal, QRL, Signal } from '@builder.io/qwik';

export interface TextAreaContextValue {
  /**
   * The controlled value of the text area.
   */
  textAreaValue: ReadonlySignal<string>;

  /**
   * The function that allow change controlled value of the text area.
   */
  setTextAreaValue$: QRL<(value: string) => void>;

  /**
   * The initila value of the text area.
   */
  initilaTextAreaValue: string;

  /**
   * The name of the text area.
   * Submitted with its owning form as part of a name/value pair.
   */
  inputName: ReadonlySignal<string | undefined>;

  /**
   * When `true`, prevents the user from interacting with the text area.
   */
  isDisabled: ReadonlySignal<boolean | undefined>;

  /**
   * Whether the text area is invalid.
   */
  isInvalid: ReadonlySignal<boolean | undefined>;

  /**
   * When `true`, indicates that the user must fill the text area before the owning form can be submitted.
   */
  isRequired: ReadonlySignal<boolean | undefined>;

  /**
   * Whether the text area is read-only.
   */
  isReadOnly: ReadonlySignal<boolean | undefined>;

  /**
   * The unique id of the text area label.
   */
  labelId: Signal<string | undefined>;

  /**
   * The unique id of the text area input.
   */
  inputId: Signal<string | undefined>;

  /**
   * The unique id of the text area description.
   */
  descriptionId: Signal<string | undefined>;

  /**
   * The unique id of the text area error message.
   */
  errorMessageId: Signal<string | undefined>;
}
