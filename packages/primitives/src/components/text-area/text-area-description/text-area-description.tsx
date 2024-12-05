import type { TextAreaDescriptionProps } from './text-area-description.types';
import { component$, useContext, useId, useTask$, Slot } from '@builder.io/qwik';
import { TextAreaContext } from '../text-area-context';

/**
 * The description that gives the user more information on the text area.
 * This component is based on the `span` element.
 */
export const TextAreaDescription = component$<TextAreaDescriptionProps>((props) => {
  const { as, id, ...others } = props;

  const { descriptionId, isDisabled, isInvalid, isRequired, isReadOnly } = useContext(TextAreaContext);

  const autoId = useId();

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    descriptionId.value = id || `qwik-primitives-text-area-description-${autoId}`;
  });

  const Component = as || 'span';

  return (
    <Component
      id={descriptionId.value}
      data-qwik-primitives-text-area-description=""
      data-scope="text-area"
      data-part="description"
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
