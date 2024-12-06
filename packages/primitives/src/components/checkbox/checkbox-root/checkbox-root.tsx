import type { CheckboxRootProps } from './checkbox-root.types';
import { component$, useComputed$, useSignal, useTask$, useContextProvider, Slot } from '@builder.io/qwik';
import { isServer, isDev } from '@builder.io/qwik/build';
import { useControllableState } from '@/hooks';
import { CheckboxContext } from '../checkbox-context';

/**
 * Contains all the parts of a checkbox.
 * This component is based on the `div` element.
 */
export const CheckboxRoot = component$<CheckboxRootProps>((props) => {
  const {
    as,
    defaultChecked,
    checked,
    onCheckedChange$,
    name,
    value = 'on',
    disabled,
    invalid,
    required,
    ...others
  } = props;

  const [isChecked, setIsChecked$] = useControllableState({
    uncontrolledValue: defaultChecked,
    controlledSignal: checked,
    finalValue: false,
    onChange$: onCheckedChange$,
  });

  const initilaChecked = isChecked.value;

  const inputName = useComputed$(() => name);
  const inputValue = useComputed$(() => value);
  const isDisabled = useComputed$(() => disabled);
  const isInvalid = useComputed$(() => invalid);
  const isRequired = useComputed$(() => required);

  const labelId = useSignal<string | undefined>(undefined);
  const inputId = useSignal<string | undefined>(undefined);
  const descriptionId = useSignal<string | undefined>(undefined);
  const errorMessageId = useSignal<string | undefined>(undefined);

  useTask$(() => {
    if (isServer && isDev && isChecked.value === 'indeterminate') {
      throw Error('[qwik-primitives]: Checkbox component can not be indeterminate during SSR');
    }
  });

  useContextProvider(CheckboxContext, {
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
  });

  const Component = as || 'div';

  return (
    <Component
      role="group"
      data-qwik-primitives-checkbox-root=""
      data-scope="checkbox"
      data-part="root"
      data-state={isChecked.value === 'indeterminate' ? 'indeterminate' : isChecked.value ? 'checked' : 'unchecked'}
      data-disabled={isDisabled.value ? '' : undefined}
      data-invalid={isInvalid.value ? '' : undefined}
      data-required={isRequired.value ? '' : undefined}
      {...others}
    >
      <Slot />
    </Component>
  );
});
