import type { TextAreaLabelProps } from './text-area-label.types';
import { component$, useContext, useId, useTask$, sync$, Slot } from '@builder.io/qwik';
import { TextAreaContext } from '../text-area-context';

/**
 * The label that gives the user information on the text area.
 * This component is based on the `label` element.
 */
export const TextAreaLabel = component$<TextAreaLabelProps>((props) => {
  const { as, id, for: htmlFor, onMouseDown$, ...others } = props;

  const { labelId, inputId, isDisabled, isInvalid, isRequired, isReadOnly } = useContext(TextAreaContext);

  const autoId = useId();

  // This asynchronous function is required.
  // This trick allows you to use the value coming from the context
  // when this value is initialized or assigned in another component during SSR.
  useTask$(async () => undefined);

  useTask$(() => {
    // During SSR we give the user the option to provide their own id.
    labelId.value = id || `qwik-primitives-text-area-label-${autoId}`;
  });

  const handleMouseDownSync$ = sync$((event: MouseEvent) => {
    // Only prevent text selection if clicking inside the label itself.
    const target = event.target as HTMLElement;
    if (target.closest('button, input, select, textarea')) return;

    // Prevent text selection when double clicking label.
    if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
  });

  const Component = as || 'label';

  return (
    <Component
      id={labelId.value}
      for={htmlFor || inputId.value}
      data-qwik-primitives-text-area-label=""
      data-scope="text-area"
      data-part="label"
      data-disabled={isDisabled.value ? '' : undefined}
      data-invalid={isInvalid.value ? '' : undefined}
      data-required={isRequired.value ? '' : undefined}
      data-readonly={isReadOnly.value ? '' : undefined}
      onMouseDown$={[onMouseDown$, handleMouseDownSync$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
