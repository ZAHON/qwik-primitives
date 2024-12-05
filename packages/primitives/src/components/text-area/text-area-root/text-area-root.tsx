import type { TextAreaRootProps } from './text-area-root.types';
import { component$, useComputed$, useSignal, useContextProvider, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks';
import { TextAreaContext } from '../text-area-context';

/**
 * Contains all the parts of a text area.
 * This component is based on the `div` element.
 */
export const TextAreaRoot = component$<TextAreaRootProps>((props) => {
  const { as, defaultValue, value, onValueChange$, name, disabled, invalid, required, readOnly, ...others } = props;

  const [textAreaValue, setTextAreaValue$] = useControllableState({
    uncontrolledValue: defaultValue,
    controlledSignal: value,
    finalValue: '',
    onChange$: onValueChange$,
  });

  const initilaTextAreaValue = textAreaValue.value;

  const inputName = useComputed$(() => name);
  const isDisabled = useComputed$(() => disabled);
  const isInvalid = useComputed$(() => invalid);
  const isRequired = useComputed$(() => required);
  const isReadOnly = useComputed$(() => readOnly);

  const labelId = useSignal<string | undefined>(undefined);
  const inputId = useSignal<string | undefined>(undefined);
  const descriptionId = useSignal<string | undefined>(undefined);
  const errorMessageId = useSignal<string | undefined>(undefined);

  useContextProvider(TextAreaContext, {
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
  });

  const Component = as || 'div';

  return (
    <Component
      role="group"
      data-qwik-primitives-text-area-root=""
      data-scope="text-area"
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
