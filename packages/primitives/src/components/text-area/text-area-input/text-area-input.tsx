import type { TextAreaInputProps } from './text-area-input.types';
import { component$, useContext, useSignal, useId, useTask$, sync$, $ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities';
import { TextAreaContext } from '../text-area-context';

/**
 * The native HTML textarea.
 * This component is based on the `textarea` element.
 */
export const TextAreaInput = component$<TextAreaInputProps>((props) => {
  const { as, ref, id, submitOnEnter, onKeyPress$, onInput$, ...others } = props;

  const {
    textAreaValue,
    setTextAreaValue$,
    initilaTextAreaValue,
    inputName,
    isDisabled,
    isInvalid,
    isRequired,
    isReadOnly,
    labelId,
    inputId,
    descriptionId,
    errorMessageId,
  } = useContext(TextAreaContext);

  const inputRef = useSignal<HTMLTextAreaElement | undefined>();
  const isInputTouched = useSignal(false);

  const autoId = useId();

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    inputId.value = id || `qwik-primitives-text-area-input-${autoId}`;
  });

  useTask$(({ track }) => {
    track(() => textAreaValue.value);

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
          setTextAreaValue$(initilaTextAreaValue);
        };

        form.addEventListener('reset', handleReset, { passive: true });

        cleanup(() => {
          form.removeEventListener('reset', handleReset);
        });
      }
    }
  });

  const handleKeyPressSync$ = sync$((event: KeyboardEvent, currentTarget: HTMLTextAreaElement) => {
    if (currentTarget.getAttribute('aria-multiline') === 'false' && event.key === 'Enter' && !event.shiftKey) {
      const form = currentTarget.form ?? currentTarget.closest('form');

      if (form) {
        form.requestSubmit();
        event.preventDefault();
      }
    }
  });

  const handleInput$ = $((event: Event, currentTarget: HTMLTextAreaElement) => {
    if (!isDisabled.value) setTextAreaValue$(currentTarget.value);
  });

  const Component = as || 'textarea';

  return (
    <Component
      ref={composeRefs([ref, inputRef])}
      value={textAreaValue.value}
      id={inputId.value}
      name={inputName.value}
      disabled={isDisabled.value}
      readOnly={isReadOnly.value ? true : undefined}
      autocomplete="off"
      aria-multiline={submitOnEnter ? 'false' : undefined}
      aria-invalid={isInvalid.value ? 'true' : undefined}
      aria-required={isRequired.value ? 'true' : undefined}
      aria-labelledby={labelId.value}
      aria-describedby={
        [descriptionId.value, isInvalid.value && errorMessageId.value].filter(Boolean).join(' ') || undefined
      }
      data-qwik-primitives-text-area-input=""
      data-scope="text-area"
      data-part="input"
      data-disabled={isDisabled.value ? '' : undefined}
      data-invalid={isInvalid.value ? '' : undefined}
      data-required={isRequired.value ? '' : undefined}
      data-readonly={isReadOnly.value ? '' : undefined}
      onKeyPress$={[onKeyPress$, handleKeyPressSync$]}
      onInput$={[onInput$, handleInput$]}
      {...others}
    />
  );
});
