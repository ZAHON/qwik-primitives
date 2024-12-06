import type { CheckboxDescriptionProps } from './checkbox-description.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { CheckboxContext } from '../checkbox-context';

/**
 * The description that gives the user more information on the checkbox.
 * This component is based on the `span` element.
 */
export const CheckboxDescription = component$<CheckboxDescriptionProps>((props) => {
  const { as, id, ...others } = props;

  const { isChecked, descriptionId, isDisabled, isInvalid, isRequired } = useContext(CheckboxContext);

  const autoId = useId();

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    descriptionId.value = id || `qwik-primitives-checkbox-description-${autoId}`;
  });

  const Component = as || 'span';

  return (
    <Component
      id={descriptionId.value}
      data-qwik-primitives-checkbox-description=""
      data-scope="checkbox"
      data-part="description"
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
