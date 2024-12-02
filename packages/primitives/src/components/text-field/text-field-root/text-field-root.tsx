import type { TextFieldRootProps } from './text-field-root.types';
import { component$, useComputed$, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks';
import { TextFieldContext } from '../text-field-context';

/**
 * Contains all the parts of a text field.
 * This component is based on the `div` element.
 */
export const TextFieldRoot = component$<TextFieldRootProps>((props) => {
  const { as, defaultValue, value, onValueChange$, name, disabled, invalid, required, readOnly, ...others } = props;

  const [textFieldValue, setTextFieldValue$] = useControllableState({
    uncontrolledValue: defaultValue,
    controlledSignal: value,
    finalValue: '',
    onChange$: onValueChange$,
  });

  const initilaTextFieldValue = textFieldValue.value;

  const inputName = useComputed$(() => name);
  const isDisabled = useComputed$(() => disabled);
  const isInvalid = useComputed$(() => invalid);
  const isRequired = useComputed$(() => required);
  const isReadOnly = useComputed$(() => readOnly);

  const labelId = useSignal<string | undefined>(undefined);
  const inputId = useSignal<string | undefined>(undefined);
  const descriptionId = useSignal<string | undefined>(undefined);
  const errorMessageId = useSignal<string | undefined>(undefined);

  useContextProvider(TextFieldContext, {
    textFieldValue,
    setTextFieldValue$,
    initilaTextFieldValue,
    inputName,
    isDisabled,
    isInvalid,
    isRequired,
    isReadOnly,
    labelId,
    inputId,
    descriptionId,
    errorMessageId,
  });

  const Component = as || 'div';

  return (
    <Component
      role="group"
      data-qwik-primitives-text-field-root=""
      data-scope="text-field"
      data-part="root"
      data-disabled={isDisabled.value ? '' : undefined}
      data-invalid={isInvalid.value ? '' : undefined}
      data-required={isRequired.value ? '' : undefined}
      data-readonly={isReadOnly.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
