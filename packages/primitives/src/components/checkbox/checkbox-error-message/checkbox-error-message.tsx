import type { CheckboxErrorMessageProps } from './checkbox-error-message.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { CheckboxContext } from '../checkbox-context';

/**
 * The error message that gives the user information about how to fix a validation error on the checkbox.
 * By default, it will render only when the `invalid` prop is set to `true` on `Checkbox.Root` component,
 * use the `forceMount` prop to always render the error message.
 * This component is based on the `span` element.
 */
export const CheckboxErrorMessage = component$<CheckboxErrorMessageProps>((props) => {
  const { as, id, forceMount, ...others } = props;

  const { isChecked, errorMessageId, isDisabled, isInvalid, isRequired } = useContext(CheckboxContext);

  const autoId = useId();

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    errorMessageId.value = id || `qwik-primitives-checkbox-error-message-${autoId}`;
  });

  const Component = as || 'span';

  return (
    (forceMount || isInvalid.value) && (
      <Component
        id={errorMessageId.value}
        aria-hidden={forceMount && !isInvalid.value ? 'true' : undefined}
        data-qwik-primitives-checkbox-error-message=""
        data-scope="checkbox"
        data-part="error-message"
        data-state={isChecked.value === 'indeterminate' ? 'indeterminate' : isChecked.value ? 'checked' : 'unchecked'}
        data-disabled={isDisabled.value ? '' : undefined}
        data-invalid={isInvalid.value ? '' : undefined}
        data-required={isRequired.value ? '' : undefined}
        {...others}
      >
        <Slot />
      </Component>
    )
  );
});
