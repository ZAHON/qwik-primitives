import type { ToggleRootProps } from './toggle-root.types';
import { component$, useComputed$, $, Slot } from '@builder.io/qwik';
import { useControllableState } from '@/hooks';

/**
 * Contains the content for the toggle.
 * This component is based on the `button` element.
 */
export const ToggleRoot = component$<ToggleRootProps>((props) => {
  const { as, defaultPressed, pressed, onPressedChange$, disabled, onClick$, ...others } = props;

  const [isPressed, setIsPressed$] = useControllableState({
    uncontrolledValue: defaultPressed,
    controlledSignal: pressed,
    finalValue: false,
    onChange$: onPressedChange$,
  });

  const state = useComputed$(() => (isPressed.value ? 'on' : 'off'));

  const handleClick$ = $(() => {
    if (!disabled) setIsPressed$(!isPressed.value);
  });

  const Component = as || 'button';

  return (
    <Component
      type="button"
      disabled={disabled}
      aria-pressed={isPressed.value}
      data-qwik-primitives-toggle-root=""
      data-scope="toggle"
      data-part="root"
      data-state={state.value}
      data-disabled={disabled ? '' : undefined}
      onClick$={[onClick$, handleClick$]}
      {...others}
    >
      <Slot />
    </Component>
  );
});
