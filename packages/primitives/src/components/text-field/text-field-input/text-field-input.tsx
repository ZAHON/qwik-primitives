import type { TextFieldInputProps } from './text-field-input.types';
import { component$, useContext, useSignal, useId, useTask$, $ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities';
import { TextFieldContext } from '../text-field-context';

/**
 * The native HTML input.
 * This component is based on the `input` element.
 */
export const TextFieldInput = component$<TextFieldInputProps>((props) => {
  const { as, ref, id, onInput$, ...others } = props;

  const {
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
  } = useContext(TextFieldContext);

  const inputRef = useSignal<HTMLInputElement | undefined>();
  const isInputTouched = useSignal(false);

  const autoId = useId();

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    inputId.value = id || `qwik-primitives-text-field-input-${autoId}`;
  });

  useTask$(({ track }) => {
    track(() => textFieldValue.value);

    if (isBrowser && !isInputTouched.value) {
      isInputTouched.value = true;
    }
  });

  useTask$(({ track, cleanup }) => {
    track(() => isInputTouched.value);

    if (isBrowser && inputRef.value && isInputTouched.value) {
      const form = inputRef.value.form ?? inputRef.value.closest('form');

      if (form) {
        const handleReset = () => {
          setTextFieldValue$(initilaTextFieldValue);
        };

        form.addEventListener('reset', handleReset, { passive: true });

        cleanup(() => {
          form.removeEventListener('reset', handleReset);
        });
      }
    }
  });

  const handleInput$ = $((event: Event, currentTarget: HTMLInputElement) => {
    if (!isDisabled.value) setTextFieldValue$(currentTarget.value);
  });

  const Component = as || 'input';

  return (
    <Component
      ref={composeRefs([ref, inputRef])}
      value={textFieldValue.value}
      id={inputId.value}
      name={inputName.value}
      disabled={isDisabled.value}
      readOnly={isReadOnly.value ? true : undefined}
      type="text"
      autocomplete="off"
      aria-invalid={isInvalid.value ? 'true' : undefined}
      aria-required={isRequired.value ? 'true' : undefined}
      aria-labelledby={labelId.value}
      aria-describedby={
        [descriptionId.value, isInvalid.value && errorMessageId.value].filter(Boolean).join(' ') || undefined
      }
      data-qwik-primitives-text-field-input=""
      data-scope="text-field"
      data-part="input"
      data-disabled={isDisabled.value ? '' : undefined}
      data-invalid={isInvalid.value ? '' : undefined}
      data-required={isRequired.value ? '' : undefined}
      data-readonly={isReadOnly.value ? '' : undefined}
      onInput$={[onInput$, handleInput$]}
      {...others}
    />
  );
});
