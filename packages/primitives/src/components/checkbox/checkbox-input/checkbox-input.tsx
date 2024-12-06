import type { CheckboxInputProps } from './checkbox-input.types';
import { component$, useContext, useSignal, useId, useTask$, $ } from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';
import { composeRefs } from '@/utilities';
import { CheckboxContext } from '../checkbox-context';

/**
 * The native HTML input.
 * This component is based on the `input` element.
 */
export const CheckboxInput = component$<CheckboxInputProps>((props) => {
  const { as, ref, id, onChange$, ...others } = props;

  const {
    isChecked,
    setIsChecked$,
    initilaChecked,
    inputName,
    inputValue,
    isDisabled,
    isInvalid,
    isRequired,
    labelId,
    inputId,
    descriptionId,
    errorMessageId,
  } = useContext(CheckboxContext);

  const inputRef = useSignal<HTMLInputElement | undefined>();
  const isInputTouched = useSignal(false);

  const autoId = useId();

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    inputId.value = id || `qwik-primitives-checkbox-input-${autoId}`;
  });

  useTask$(({ track }) => {
    track(() => isChecked.value);

    if (isBrowser && inputRef.value) {
      inputRef.value.indeterminate = isChecked.value === 'indeterminate';
    }
  });

  useTask$(({ track }) => {
    track(() => isChecked.value);

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
          setIsChecked$(initilaChecked);
        };

        form.addEventListener('reset', handleReset, { passive: true });

        cleanup(() => {
          form.removeEventListener('reset', handleReset);
        });
      }
    }
  });

  const handleChange$ = $(() => {
    if (!isDisabled.value) setIsChecked$(isChecked.value === 'indeterminate' ? true : !isChecked.value);
  });

  const Component = as || 'input';

  return (
    <Component
      ref={composeRefs([ref, inputRef])}
      checked={isChecked.value === 'indeterminate' ? false : isChecked.value}
      id={inputId.value}
      name={inputName.value}
      value={inputValue.value}
      disabled={isDisabled.value}
      type="checkbox"
      autocomplete="off"
      aria-invalid={isInvalid.value ? 'true' : undefined}
      aria-required={isRequired.value ? 'true' : undefined}
      aria-labelledby={labelId.value}
      aria-describedby={
        [descriptionId.value, isInvalid.value && errorMessageId.value].filter(Boolean).join(' ') || undefined
      }
      data-qwik-primitives-checkbox-input=""
      data-scope="checkbox"
      data-part="input"
      data-state={isChecked.value === 'indeterminate' ? 'indeterminate' : isChecked.value ? 'checked' : 'unchecked'}
      data-disabled={isDisabled.value ? '' : undefined}
      data-invalid={isInvalid.value ? '' : undefined}
      data-required={isRequired.value ? '' : undefined}
      onChange$={[onChange$, handleChange$]}
      {...others}
    />
  );
});
